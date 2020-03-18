import {Speed} from "../common/train";

export class SpeedStyle {
  readonly color: string;
  readonly width: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  line() {
    return {
      'stroke-width': this.width,
      stroke: this.color
    };
  }

  station() {
    return {stroke: this.color, fill: this.color};
  }
}

export namespace SpeedStyle {
  const LOCAL = new SpeedStyle('black', 1);
  const SEMI_RAPID = new SpeedStyle('green', 1);
  const RAPID = new SpeedStyle('#0066ff', 1);
  const EXPRESS = new SpeedStyle('orange', 2);
  const LIMITED_EXP = new SpeedStyle('red', 2);
  const KODAMA = new SpeedStyle('black', 2);
  const HIKARI = new SpeedStyle('#0066ff', 2);
  const NOZOMI = new SpeedStyle('#003399', 2);

  export function fromSpeed(speed: Speed) {
    if(speed == 1) return LOCAL;
    if(speed == 2) return SEMI_RAPID;
    if(speed <= 4) return RAPID;
    if(speed <= 6) return EXPRESS;
    if(speed == 7) return LIMITED_EXP;
    if(speed == 8) return KODAMA;
    if(speed == 9) return HIKARI;
    return NOZOMI;
  }
}

