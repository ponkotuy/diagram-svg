
export class Station {
  readonly id: number;
  readonly name: string;
  readonly rank: StationRank | null;

  constructor(station: StationObj) {
    this.id = station.id;
    this.name = station.name;
    this.rank = StationRank.parse(station.rank);
  }
}

export type StationObj = {
  id: number,
  name: string,
  rank: number | null
}

export type StationRank = 1 | 2 | 3 | 4 | 5

export module StationRank {
  export function isRank(x: number): x is StationRank {
    return 1 <= x && x <= 5;
  }

  export function parse(x: number | null): StationRank | null {
    return x ? (StationRank.isRank(x) ? x : null) : null;
  }
}
