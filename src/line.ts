import _ = require('lodash');

export class Line {
  readonly id: number;
  readonly stations: Station[];
  readonly xPos: number;

  constructor(line: LineObj) {
    this.id = line.id;
    this.stations = line.stations.map(st => new Station(st));
    this.xPos = line.xPos || 0;
  }
}

export class SubLine extends Line {
  readonly transfer: Station;

  constructor(line: LineObj, main: Line) {
    super(line);
    const mainStations = main.stations.map(st => st.id);
    const tranfer: Station | undefined = _.find(this.stations, st => _.includes(mainStations, st.id));
    if(tranfer == undefined) throw new Error(`Line id=${this.id} does not exists transfer station.`);
    this.transfer = tranfer;
  }

  singleLineStations() {
    return this.stations.filter(st => st.id != this.transfer.id);
  }

  transferIdx() {
    return _.findIndex(this.stations, st => st.id == this.transfer.id)
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
