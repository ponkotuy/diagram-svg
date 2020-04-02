import {StationRank} from "../common/station";

export class StationStyle {
  readonly color: string;
  readonly size: number;
  readonly weight: number;
  readonly underline: boolean;

  constructor(color: string, size: number, weight: number, underline: boolean) {
    this.color = color;
    this.size = size;
    this.weight = weight;
    this.underline = underline;
  }

  font() {
    return {
      'font-size': this.size,
      'font-weight': this.weight,
      fill: this.color
    }
  }
}

export namespace StationStyle {
  const LARGEST = new StationStyle('red', 22, 400, true);
  const MAIN_BRANCH = new StationStyle('blue', 20, 400, true);
  const MAIN = new StationStyle('blue', 18, 400, false);
  const SMALL = new StationStyle('black', 18, 400, false);
  export const DEFAULT = new StationStyle('black', 20, 400, false);

  export function fromRank(rank: StationRank) {
    if(rank == 1) return LARGEST;
    if(rank == 2) return MAIN_BRANCH;
    if(rank == 3) return MAIN;
    return SMALL;
  }
}
