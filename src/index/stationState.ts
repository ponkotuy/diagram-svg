import {Position} from "./position";

export const TRAIN_WIDTH = 20;

export class StationState {
  private readonly original: Position;
  readonly pos: Position;
  readonly count: number;

  constructor(pos: Position, count = 0) {
    this.original = pos;
    this.count = count;
    this.pos = new Position(pos.x + count * TRAIN_WIDTH, pos.y);
  }

  incr() {
    return new StationState(this.original, this.count + 1);
  }
}
