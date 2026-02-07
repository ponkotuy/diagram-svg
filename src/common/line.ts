import {Station, StationObj} from "./station";

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
    return this.stations.some(station => station.id == stationId);
  }

  findStation(stationId: number) {
    return this.stations.find(station => station.id == stationId);
  }

  findStationIdx(stationId: number) {
    return this.stations.findIndex(station => station.id == stationId);
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
    const tranfer: Station | undefined = line.stations.find(st => mainStations.includes(st.id));
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
    return this.stations().findIndex(st => st.id == this.transfer.id)
  }
}

export type LineObj = {
  id: number,
  stations: StationObj[]
  xPos: number | null;
}
