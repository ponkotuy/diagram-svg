import {Line, Station, Position} from "./line";
import {Speed, Train} from "./train";
import _ = require('lodash');

const STATION_HEIGHT = 40;
const TRAIN_WIDTH = 28;
const STATION_FONT = {'font-size': 24, 'text-anchor': 'start'};

export class Drawer {
  readonly snap: RaphaelPaper;
  readonly mainLine: Line;
  readonly trains: Train[];
  readonly subLines: Line[];
  stationPosition: { [k: number]: Position } = {};
  mainLineTextMaxSize = 0;

  constructor(snap: RaphaelPaper, main: Line, subs: Line[], trains: Train[]) {
    this.snap = snap;
    this.mainLine = main;
    this.trains = trains;
    this.subLines = subs;
  }

  drawLine(stations: Station[], x: number, baseY: number): any[] {
    return stations.map((st, idx) => {
      const posY = baseY + STATION_HEIGHT * (idx + 0.5);
      this.stationPosition[st.id] = {x: x, y: posY};
      const text = this.snap.text(x, posY + 12, st.name);
      text.attr(STATION_FONT);
      return text;
    });
  }

  drawMain() {
    this.drawLine(this.mainLine.stations, 0, 0).forEach(text => {
      this.mainLineTextMaxSize = Math.max(this.mainLineTextMaxSize, text.node.getBBox().width)
    });
  }

  drawSub() {
    const trainWidth = this.trains.map(train => train.count).reduce((x, y) => x + y) * TRAIN_WIDTH;
    const width = this.mainLineTextMaxSize + trainWidth;
    this.subLines.forEach((line, idx) => {
      const startIdx = _.findIndex(this.mainLine.stations, (st => st.id === line.stations[0].id));
      const height = (startIdx + idx + 1.5) * STATION_HEIGHT;
      this.drawLine(line.stations.slice(1), width, height);
    });
  }

  drawTrain() {
    this.trains.map(train => {
      const font = fontFromSpeed(train.speed);
      for (let i = 0; i < train.count; i++) {
        let before = null;
        let beforeStation = null;
        train.stations.forEach(station => {
          const stPos = this.stationPosition[station];
          const pos = {x: this.mainLineTextMaxSize + 12 + stPos.x, y: stPos.y + 12};
          this.snap.circle(pos.x, pos.y, STATION_HEIGHT >> 3)
            .attr({stroke: font.color, fill: font.color});
          if(before) {
            const line = this.snap.path(`M${before.x},${before.y} L${pos.x},${pos.y}`);
            line.attr({"stroke-width": font.width, stroke: font.color});
          }
          before = pos;
          this.stationPosition[station] = {x: stPos.x + TRAIN_WIDTH, y: stPos.y};
          for (let s = beforeStation + 1; s < station; s++) {
            const target = this.stationPosition[s];
            if(target) {
              this.stationPosition[s] = {x: target.x + TRAIN_WIDTH, y: target.y}
            }
          }
          beforeStation = station;
        });
      }
    })
  }
}

function fontFromSpeed(speed: Speed) {
  if(speed == 1) return {color: 'black', width: 2};
  if(speed <= 4) return {color: 'cyan', width: 2};
  if(speed <= 7) return {color: 'red', width: 3};
  if(speed == 8) return {color: 'black', width: 3};
  return {color: 'blue', width: 3};
}
