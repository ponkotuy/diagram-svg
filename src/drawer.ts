import {Line, Station} from "./line";
import {Speed, Train} from "./train";
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
  readonly subLines: Line[];
  readonly branchStations: number[] = [];
  stationState: { [k: number]: StationState } = {};
  mainLineTextMaxSize = 0;
  snapWidth = 640;
  snapHeight = 480;
  snapId = 'svg';

  constructor(main: Line, subs: Line[], trains: Train[]) {
    this.snap = Raphael(this.snapId, this.snapWidth, this.snapHeight);
    this.mainLine = main;
    this.trains = trains;
    this.subLines = subs;
    subs.forEach(line => this.branchStations[line.id] = line.stations[0].id);
  }

  isMain(stationId: number) {
    return 0 <= this.mainLine.stations.map(station => station.id).indexOf(stationId);
  }

  searchSubline(stationId) {
    return _.find(this.subLines, line => 0 <= line.stations.map(st => st.id).indexOf(stationId));
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
    this.subLines.forEach((line, idx) => {
      const startIdx = _.findIndex(this.mainLine.stations, (st => st.id === line.stations[0].id));
      const height = (startIdx + 2.5) * STATION_HEIGHT;
      this.drawStations(line.stations.slice(1), width, height);
    });
  }

  drawLineElement(font: Font, beforePos: Position, afterPos: Position) {
    const line = this.snap.path(`M${beforePos.x + STATION_TRAIN},${beforePos.y + STATION_TRAIN} L${afterPos.x + STATION_TRAIN},${afterPos.y + STATION_TRAIN}`);
    line.attr({"stroke-width": font.width, stroke: font.color});
  }

  nextStation(target: number, next: number) {
    const lineId = this.branchStations.indexOf(target);
    if(lineId == -1) return ++target;
    else {
      const line = this.searchSubline(next);
      if(line && line.stations.some(st => st.id == next)) return line.stations[1].id;
      else return ++target;
    }
  }

  drawLine(font: Font, before: number | null, after: number) {
    if(before === null) return;
    for(let i = before; i != after; ) {
      const next = this.nextStation(i, after);
      const origPos = this.stationState[i].pos;
      const nextPos = this.stationState[next].pos;
      this.drawLineElement(font, origPos, nextPos);
      i = next;
    }
  }

  drawTrain() {
    this.trains.map(train => {
      const font = fontFromSpeed(train.speed);
      for (let i = 0; i < train.count; i++) {
        let beforeStation = null;
        train.stations.forEach(station => {
          const stPos = this.stationState[station].pos;
          const pos = {x: stPos.x + STATION_TRAIN, y: stPos.y + STATION_TRAIN};
          const circle = this.snap.circle(pos.x, pos.y, STOP_SIZE)
            .attr({stroke: font.color, fill: font.color});
          this.expandSnap(circle);
          this.drawLine(font, beforeStation, station);
          beforeStation = station;
        });
        this.updateStationState(train.stations);
      }
    })
  }

  expandSnap(elem: RaphaelElement) {
    const box = elem.getBBox();
    const requiredY = box.y2 + (STATION_HEIGHT >> 1);
    if(this.snapWidth < box.x2 || this.snapHeight < requiredY) {
      const x = Math.ceil(Math.max(this.snapWidth, box.x2));
      const y = Math.ceil(Math.max(this.snapHeight, requiredY));
      this.snap.setSize(x, y);
      const svg = document.getElementById(this.snapId);
      svg.setAttribute('width', `${x}`);
      svg.setAttribute('height', `${y}`);
      this.snapWidth = x;
      this.snapHeight = y;
    }
  }

  updateStationState(stations: number[]) {
    if(this.isMain(stations[stations.length - 1])) {
      this.incrStationState(stations[0], stations[stations.length - 1])
    } else {
      const sub = this.searchSubline(stations[stations.length - 1]);
      this.incrStationState(stations[0], sub.stations[0].id);
      this.incrStationState(sub.stations[1].id, stations[stations.length - 1]);
    }
  }

  incrStationState(start: number, end: number) {
    for(let i = start; i <= end; ++i) { this.stationState[i] = this.stationState[i].incr(); }
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

  constructor(pos, count = 0) {
    this.original = pos;
    this.count = count;
    this.pos = new Position(pos.x + count * TRAIN_WIDTH, pos.y);
  }

  incr() {
    return new StationState(this.original, this.count + 1);
  }

  addX(add) {
    return new StationState(this.original.addX(add), this.count)
  }
}
