export class Line {
  readonly id: number;
  readonly stations: Station[];

  constructor(line: LineObj) {
    this.id = line.id;
    this.stations = line.stations.map(st => new Station(st))
  }
}

type LineObj = {
  id: number,
  stations: StationObj[]
}

export class Station {
  readonly id: number;
  readonly name: string;

  constructor(station: StationObj) {
    this.id = station.id;
    this.name = station.name;
  }
}

type StationObj = {
  id: number,
  name: string
}

export type Position = {
  x: number,
  y: number
}
