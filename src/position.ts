export class Position {
  readonly x: number;
  readonly y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addX(add: number) {
    return new Position(this.x + add, this.y);
  }
}
