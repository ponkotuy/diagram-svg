import {Lines, Order} from "./lines";

export class TrainStops {
  readonly lines: Lines;
  readonly stops: number[][];

  constructor(lines: Lines, stops: number[][]) {
    this.lines = lines;
    this.stops = stops;
  }

  push(station: number) {
    const lastBranch = 0 < this.stops.length ? this.stops[this.stops.length - 1] : null;
    if(lastBranch == null) {
      this.stops.push([station]);
    } else {
      const lastStop = lastBranch[lastBranch.length - 1];
      switch (this.lines.compareStation(lastStop, station)) {
        case Order.Asc:
          lastBranch.push(station);
          break;
        case Order.Equal:
          break;
        default:
          this.stops.push([station]);
      }
    }
  }

  toJSON() {
    return {
      'stations': this.stops[0],
      'branches': this.stops.slice(1)
    }
  }
}
