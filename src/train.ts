export class Train {
  readonly stations: number[];
  readonly count: number;
  readonly speed: Speed;

  constructor(obj: TrainObj) {
    this.stations = obj.stations;
    this.count = obj.count;
    this.speed = obj.speed
  }
}

export type TrainObj = {
  stations: number[],
  count: number;
  speed: Speed;
}

export type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
