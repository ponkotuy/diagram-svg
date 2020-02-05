export class Line {
  readonly id: number;
  readonly stations: Station[];
  readonly xPos: number;

  constructor(line: LineObj) {
    this.id = line.id;
    this.stations = line.stations.map(st => new Station(st))
    this.xPos = line.xPos || 0;
  }
}

type LineObj = {
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

type StationObj = {
  id: number,
  name: string
}
