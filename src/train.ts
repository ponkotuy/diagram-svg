class Train {
  readonly stations: number[];
  readonly count: number;

  constructor(obj: TrainObj) {
    this.stations = obj.stations;
    this.count = obj.count;
  }
}

type TrainObj = {
  stations: number[],
  count: number
}
