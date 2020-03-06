import _ = require('lodash');

export class Line {
  readonly id: number;
  readonly stations: Station[];
  readonly xPos: number | null;

  constructor(id: number, stations: Station[], xPos: number | null) {
    this.id = id;
    this.stations = stations;
    this.xPos = xPos;
  }

  toJSON() {
    return {
      'id': this.id,
      'stations': this.stations,
      'xPos': this.xPos
    }
  }

  hasStation(stationId: number) {
    return _.some(this.stations, station => station.id == stationId);
  }

  findStation(stationId: number) {
    return _.find(this.stations, station => station.id == stationId);
  }

  findStationIdx(stationId: number) {
    return _.findIndex(this.stations, station => station.id == stationId);
  }
}

export namespace Line {
  export function fromObj(line: LineObj) {
    const stations = line.stations.map(st => new Station(st));
    return new Line(line.id, stations, line.xPos);
  }
}

export class SubLine {
  readonly line: Line;
  readonly transfer: Station;

  constructor(line: Line, main: Line) {
    this.line = line;
    const mainStations = main.stations.map(st => st.id);
    const tranfer: Station | undefined = _.find(line.stations, st => _.includes(mainStations, st.id));
    if(tranfer == undefined) throw new Error(`Line id=${line.id} does not exists transfer station.`);
    this.transfer = tranfer;
  }

  id() {
    return this.line.id;
  }

  stations() {
    return this.line.stations;
  }

  xPos() {
    return this.line.xPos;
  }

  singleLineStations() {
    return this.stations().filter(st => st.id != this.transfer.id);
  }

  transferIdx() {
    return _.findIndex(this.stations(), st => st.id == this.transfer.id)
  }
}

export type LineObj = {
  id: number,
  stations: StationObj[]
  xPos: number | null;
}

export class Station {
  readonly id: number;
  readonly name: string;

  constructor(station: StationObj) {
    this.id = station.id;
    this.name = station.name;
  }
}

export type StationObj = {
  id: number,
  name: string
}
