import {SpeedStyle} from "../index/speedStyle";

export class Train {
  readonly stations: number[];
  readonly branches: number[][];
  readonly count: number;
  readonly speed: Speed;
  readonly name: string | null;

  constructor(obj: TrainObj) {
    this.stations = obj.stations;
    this.branches = obj.branches || [];
    this.count = obj.count;
    this.speed = obj.speed;
    this.name = obj.name;
  }

  style() {
    return SpeedStyle.fromSpeed(this.speed)
  }
}

export type TrainObj = {
  stations: number[]
  branches: number[][] | null;
  count: number
  speed: Speed
  name: string | null
}

export type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
