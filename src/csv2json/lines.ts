import _ = require('lodash');

import {TrainStops} from "./trainStops";
import {Line} from "../common/line";

export class Lines {
  readonly main: Line;
  readonly subs: Line[];

  constructor(main: Line, subs: Line[]) {
    this.main = main;
    this.subs = subs;
  }

  lines() {
    return [this.main].concat(this.subs);
  }

  toJSON(trains: Train[], title: string, author: string) {
    return {
      'mainLine': this.main.toJSON(),
      'subLines': this.subs.map(sub => sub.toJSON()),
      'trains': trains.map(train => train.toJSON()),
      'title': title,
      'author': author
    };
  }

  findLineFromStation(station: number) {
    return _.find(this.lines(), line => line.hasStation(station))
  }

  findSub(lineId: number) {
    return _.find(this.subs, line => line.id == lineId)
  }

  branchStation(lineId: number): number | undefined {
    const line = this.findSub(lineId);
    if(line == undefined) return undefined;
    const mainStations = this.main.stations.map(st => st.id);
    return _.find(mainStations, st => st == line.stations[0].id) ||
      _.find(mainStations, st => st == line.stations[line.stations.length - 1].id)
  }

  compareStation(x: number, y: number): Order | null {
    const xLine = this.findLineFromStation(x);
    const yLine = this.findLineFromStation(y);
    if(xLine == undefined) this.throwNotFoundStation(x);
    if(yLine == undefined) this.throwNotFoundStation(y);
    if(xLine.id == yLine.id) {
      const comp = xLine.findStationIdx(y) - xLine.findStationIdx(x);
      if(comp < 0) return Order.Desc;
      if(comp == 0) return Order.Equal;
      return Order.Asc;
    } else {
      const [subLine, mainStation] = xLine.id == this.main.id ? [yLine, x] : [xLine, y];
      const branch = this.branchStation(subLine.id)!;
      const subOrder = branch == subLine.stations[0].id ? Order.Asc : Order.Desc;
      const mainOrder = Order.number(mainStation, branch);
      if(subOrder == mainOrder) return null;
      if(mainStation == x) return subOrder;
      return Order.reverse(subOrder);
    }
  }

  throwNotFoundStation(id: number): never {
    throw new Error(`Not found station. id=${id}`);
  }
}

export class Train {
  readonly stops: TrainStops;
  readonly speed: number;
  readonly count: number;

  constructor(stops: TrainStops, speed: number, count: number) {
    this.stops = stops;
    this.speed = speed;
    this.count = count;
  }

  toJSON() {
    const stops = this.stops.toJSON();
    return {
      'stations': stops.stations,
      'branches': 0 < stops.branches.length ? stops.branches : undefined,
      'speed': this.speed,
      'count': this.count
    }
  }
}

export enum Order {
  Desc = -1,
  Equal = 0,
  Asc = 1
}

export namespace Order {
  export function reverse(order: Order) {
    switch (order) {
      case Order.Asc: return Order.Desc;
      case Order.Equal: return Order.Equal;
      case Order.Desc: return Order.Asc;
    }
  }

  export function number(x: number, y: number) {
    if(x < y) return Order.Asc;
    if(x == y) return Order.Equal;
    return Order.Desc;
  }
}
