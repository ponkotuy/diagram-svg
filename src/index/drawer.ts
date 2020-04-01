import {Line, SubLine} from "../common/line";
import {Train} from "../common/train";
import {Position} from "./position";
import {StationState, TRAIN_WIDTH} from "./stationState"
import _ = require('lodash');
import Raphael = require('raphael');
import {SpeedStyle} from "./speedStyle";
import {Station} from "../common/station";

const STATION_HEIGHT = 28;
const STATION_TRAIN = 8;
const STOP_SIZE = 5;
const DEFAULT_FONT = {'font-size': 20, 'text-anchor': 'start'};
const TRAIN_NAME_LINE_LENGTH = STATION_HEIGHT * 2;

export class Drawer {
  readonly snapId: string;
  readonly snap: RaphaelPaper;
  readonly mainLine: Line;
  readonly trains: Train[];
  readonly subLines: SubLine[];
  readonly branchStations: number[] = [];
  readonly stations: number[] = [];
  stationState: { [k: number]: StationState } = {};
  snapWidth = 640;
  snapHeight = 480;

  constructor(snapId: string, main: Line, subs: SubLine[], trains: Train[]) {
    this.snapId = snapId;
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
    const mainPos = this.drawMain();
    this.drawTrainName(mainPos.y + STATION_HEIGHT * 1.5);
    this.drawSub(mainPos.x);
    this.drawTrain();
  }

  drawStations(stations: Station[], x: number, baseY: number): Position {
    const texts = stations.map((st, idx) => {
      const posY = baseY + STATION_HEIGHT * (idx + 0.5);
      this.stationState[st.id] = new StationState(new Position(x, posY));
      const text = this.snap.text(x, posY + STATION_TRAIN, st.name);
      text.attr(DEFAULT_FONT);
      return text;
    });
    const maxWidth = Math.max(...texts.map(text => text.getBBox().width));
    let maxHeight = 0;
    stations.forEach(station => {
      const state = this.stationState[station.id];
      this.stationState[station.id] = new StationState(state.pos.addX(maxWidth));
      maxHeight = Math.max(maxHeight, state.pos.y)
    });
    return new Position(maxWidth, maxHeight);
  }

  drawMain() {
    return this.drawStations(this.mainLine.stations, 0, 0);
  }

  drawSub(xPos: number) {
    const trainWidth = this.trains.map(train => train.count).reduce((x, y) => x + y) * TRAIN_WIDTH;
    const width = xPos + trainWidth;
    this.subLines.forEach(line => {
      const transferMainIdx = _.findIndex(this.mainLine.stations, (st => st.id === line.transfer.id));
      const transferSubIdx = line.transferIdx();
      const height = (transferMainIdx - transferSubIdx + (transferSubIdx == 0 ? 2.5 : -1.5)) * STATION_HEIGHT;
      this.drawStations(line.singleLineStations(), width + (line.xPos() || 0) * TRAIN_WIDTH, height);
    });
  }

  drawLineElement(style: SpeedStyle, beforePos: Position, afterPos: Position) {
    const pos1 = beforePos.addXY(STATION_TRAIN, STATION_TRAIN);
    const pos2 = afterPos.addXY(STATION_TRAIN, STATION_TRAIN);
    this.drawPath(pos1, pos2, style.line());
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
  drawLine(style: SpeedStyle, before: number | null, after: number): number[] {
    if(before === null) return [];
    const result = [before];
    for(let i = before; i != after; ) {
      const next = this.nextStation(i, after);
      result.push(next);
      const origPos = this.stationState[i].pos;
      const nextPos = this.stationState[next].pos;
      this.drawLineElement(style, origPos, nextPos);
      i = next;
    }
    return result;
  }

  drawTrain() {
    this.trains.map(train => {
      const style = train.style();
      for (let i = 0; i < train.count; i++) {
        let beforeStation: number | null = null;
        const beforeStations = new Map<number, Position>();
        const allStations: Set<number> = new Set();
        train.stations.forEach(station => {
          const [stations, pos] = this.drawTrainStation(style, station, beforeStation);
          stations.forEach(st => allStations.add(st));
          beforeStation = station;
          beforeStations.set(station, pos);
        });
        train.branches.forEach(branch => {
          beforeStation = null;
          branch.forEach(station => {
            if(beforeStations.has(station)) {
              const stations = this.drawLine(style, beforeStation, station);
              stations.forEach(st => allStations.add(st));
              beforeStation = station
            } else {
              const [stations, pos] = this.drawTrainStation(style, station, beforeStation);
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

  drawTrainName(yPos: number) {
    _(this.trains)
      .filter(train => train.name != null)
      .sortBy(train => -train.speed)
      .uniqBy(train => train.name)
      .forEach((train, idx) => {
        const left = new Position(STATION_HEIGHT * 0.5, yPos + STATION_HEIGHT * (idx + 0.5));
        const right = left.addX(TRAIN_NAME_LINE_LENGTH);
        const circleStyle = train.style().station();
        this.snap.circle(left.x, left.y, STOP_SIZE).attr(circleStyle);
        this.snap.circle(right.x, right.y, STOP_SIZE).attr(circleStyle);
        this.drawPath(left, right, train.style().line());
        const text = this.snap.text(right.x + STATION_HEIGHT * 2, right.y, train.name!);
        text.attr(DEFAULT_FONT);
        this.expandSnap(text);
      });
  }

  private drawPath(pos1: Position, pos2: Position, params: Object) {
    const line = this.snap.path(`M${pos1.x},${pos1.y} L${pos2.x},${pos2.y}`);
    line.attr(params);
  }

  private drawTrainStation(style: SpeedStyle, station: number, beforeStation: number | null): [number[], Position] {
    const stPos = this.stationState[station].pos;
    const pos = new Position(stPos.x + STATION_TRAIN, stPos.y + STATION_TRAIN);
    const circle = this.snap.circle(pos.x, pos.y, STOP_SIZE).attr(style.station());
    this.expandSnap(circle);
    return [this.drawLine(style, beforeStation, station), pos];
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
