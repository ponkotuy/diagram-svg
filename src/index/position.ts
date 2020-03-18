export class Position {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  addX(add: number) {
    return new Position(this.x + add, this.y);
  }

  addXY(x: number, y: number) {
    return new Position(this.x + x, this.y + y);
  }

  add(pos: Position) {
    return new Position(this.x + pos.x, this.y + pos.y);
  }
}
