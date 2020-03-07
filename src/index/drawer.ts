import {Line, Station, SubLine} from "../common/line";
import {Speed, Train} from "../common/train";
import {Position} from "./position";
import _ = require('lodash');
import Raphael = require('raphael');

const STATION_HEIGHT = 28;
const TRAIN_WIDTH = 20;
const STATION_TRAIN = 8;
const STOP_SIZE = 5;
const STATION_FONT = {'font-size': 20, 'text-anchor': 'start'};

export class Drawer {
  readonly snap: RaphaelPaper;
  readonly mainLine: Line;
  readonly trains: Train[];
  readonly subLines: SubLine[];
  readonly branchStations: number[] = [];
  readonly stations: number[] = [];
  stationState: { [k: number]: StationState } = {};
  mainLineTextMaxSize = 0;
  snapWidth = 640;
  snapHeight = 480;
  snapId = 'svg';

  constructor(main: Line, subs: SubLine[], trains: Train[]) {
    this.snap = Raphael(this.snapId, this.snapWidth, this.snapHeight);
    this.mainLine = main;
    this.trains = trains;
    this.subLines = subs;
    this.stations = _(main.stations.map(st => st.id))
      .concat(_.flatMap(subs, sub => sub.stations().map(st => st.id)))
      .sortedUniq().value();
    subs.forEach(line => this.branchStations[line.id()] = line.stations()[0].id);
  }

  searchSubline(stationId: number) {
    return _.find(this.subLines, line => 0 <= line.stations().map(st => st.id).indexOf(stationId));
  }

  draw() {
    this.drawMain();
    this.drawSub();
    this.drawTrain();
  }

  drawStations(stations: Station[], x: number, baseY: number): number {
    const texts = stations.map((st, idx) => {
      const posY = baseY + STATION_HEIGHT * (idx + 0.5);
      this.stationState[st.id] = new StationState(new Position(x, posY));
      const text = this.snap.text(x, posY + STATION_TRAIN, st.name);
      text.attr(STATION_FONT);
      return text;
    });
    const maxWidth = Math.max(...texts.map(text => text.getBBox().width));
    stations.forEach(station => {
      const state = this.stationState[station.id];
      this.stationState[station.id] = new StationState(state.pos.addX(maxWidth));
    });
    return maxWidth
  }

  drawMain() {
    const maxWidth = this.drawStations(this.mainLine.stations, 0, 0);
    this.mainLineTextMaxSize = Math.max(this.mainLineTextMaxSize, maxWidth);
  }

  drawSub() {
    const trainWidth = this.trains.map(train => train.count).reduce((x, y) => x + y) * TRAIN_WIDTH;
    const width = this.mainLineTextMaxSize + trainWidth;
    this.subLines.forEach(line => {
      const transferMainIdx = _.findIndex(this.mainLine.stations, (st => st.id === line.transfer.id));
      const transferSubIdx = line.transferIdx();
      const height = (transferMainIdx - transferSubIdx + (transferSubIdx == 0 ? 2.5 : -1.5)) * STATION_HEIGHT;
      this.drawStations(line.singleLineStations(), width + (line.xPos() || 0) * TRAIN_WIDTH, height);
    });
  }

  drawLineElement(font: Font, beforePos: Position, afterPos: Position) {
    const line = this.snap.path(`M${beforePos.x + STATION_TRAIN},${beforePos.y + STATION_TRAIN} L${afterPos.x + STATION_TRAIN},${afterPos.y + STATION_TRAIN}`);
    line.attr({"stroke-width": font.width, stroke: font.color});
  }

  nextStation(target: number, next: number): number {
    const f = (station: number) => {
      const nextIdx = this.stations.indexOf(station) + 1;
      return this.stations[nextIdx] || next;
    };
    const lineId = this.branchStations.indexOf(target);
    if(lineId == -1) return f(target);
    else {
      const line = this.searchSubline(next);
      if(line && line.stations().slice(1).some(st => st.id == next)) return line.stations()[1].id;
      else return f(target);
    }
  }

  // 通過・停車駅リストを返す
  drawLine(font: Font, before: number | null, after: number): number[] {
    if(before === null) return [];
    const result = [before];
    for(let i = before; i != after; ) {
      const next = this.nextStation(i, after);
      result.push(next);
      const origPos = this.stationState[i].pos;
      const nextPos = this.stationState[next].pos;
      this.drawLineElement(font, origPos, nextPos);
      i = next;
    }
    return result;
  }

  drawTrain() {
    this.trains.map(train => {
      const font = fontFromSpeed(train.speed);
      for (let i = 0; i < train.count; i++) {
        let beforeStation: number | null = null;
        const beforeStations = new Map<number, Position>();
        const allStations: Set<number> = new Set();
        train.stations.forEach(station => {
          const [stations, pos] = this.drawTrainStation(font, station, beforeStation);
          stations.forEach(st => allStations.add(st));
          beforeStation = station;
          beforeStations.set(station, pos);
        });
        train.branches.forEach(branch => {
          beforeStation = null;
          branch.forEach(station => {
            if(beforeStations.has(station)) {
              this.drawLine(font, beforeStation, station);
              beforeStation = station
            } else {
              const [stations, pos] = this.drawTrainStation(font, station, beforeStation);
              stations.forEach(st => allStations.add(st));
              beforeStation = station;
              beforeStations.set(station, pos);
            }
          })
        });
        allStations.forEach(st => this.stationState[st] = this.stationState[st].incr());
      }
    })
  }

  private drawTrainStation(font: Font, station: number, beforeStation: number | null): [number[], Position] {
    const stPos = this.stationState[station].pos;
    const pos = new Position(stPos.x + STATION_TRAIN, stPos.y + STATION_TRAIN);
    const circle = this.snap.circle(pos.x, pos.y, STOP_SIZE)
      .attr({stroke: font.color, fill: font.color});
    this.expandSnap(circle);
    return [this.drawLine(font, beforeStation, station), pos];
  }

  expandSnap(elem: RaphaelElement) {
    const box = elem.getBBox();
    const requiredY = box.y2 + (STATION_HEIGHT >> 1);
    if(this.snapWidth < box.x2 || this.snapHeight < requiredY) {
      const x = Math.ceil(Math.max(this.snapWidth, box.x2));
      const y = Math.ceil(Math.max(this.snapHeight, requiredY));
      this.snap.setSize(x, y);
      const svg = document.getElementById(this.snapId);
      svg?.setAttribute('width', `${x}`);
      svg?.setAttribute('height', `${y}`);
      this.snapWidth = x;
      this.snapHeight = y;
    }
  }

  clear() {
    this.snap.clear();
  }
}

type Font = {color: string, width: number}

function fontFromSpeed(speed: Speed) {
  if(speed == 1) return {color: 'black', width: 1};
  if(speed == 2) return {color: 'green', width: 1};
  if(speed <= 4) return {color: '#0066ff', width: 1};
  if(speed <= 6) return {color: 'orange', width: 2};
  if(speed == 7) return {color: 'red', width: 2};
  if(speed == 8) return {color: 'black', width: 2};
  if(speed == 9) return {color: '#0066ff', width: 2};
  return {color: '#003399', width: 2};
}

class StationState {
  private readonly original: Position;
  readonly pos: Position;
  readonly count: number;

  constructor(pos: Position, count = 0) {
    this.original = pos;
    this.count = count;
    this.pos = new Position(pos.x + count * TRAIN_WIDTH, pos.y);
  }

  incr() {
    return new StationState(this.original, this.count + 1);
  }
}