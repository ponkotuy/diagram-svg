import _ = require('lodash');
import {Lines, Train} from "./lines";
import {TrainStops} from "./trainStops";
import {Line} from "../common/line";
import {DiagramAttrs} from "./diagramAttrs";
import {Station, StationRank} from "../common/station";

export class FirstParser {
  readonly rows: string[][];
  readonly attrs: DiagramAttrs;
  readonly forwardTransfers: Set<number> = new Set();
  readonly hasName: boolean;

  constructor(rows: string[][], attrs: DiagramAttrs) {
    this.rows = rows;
    this.attrs = attrs;
    this.hasName = rows[2][0] == 'name';
  }

  parse() {
    const lines = this.parseStations();
    lines.subs.forEach(sub => this.addForwardTransfers(lines.main, sub));
    const trains = this.parseTrains(lines);
    return lines.toJSON(trains, this.attrs);
  }

  private addForwardTransfers(main: Line, sub: Line) {
    const mainStations = main.stations.map(st => st.id);
    const idx = _.findIndex(sub.stations, st => mainStations.indexOf(st.id) != -1);
    sub.stations.slice(0, idx).forEach(st => this.forwardTransfers.add(st.id));
  }

  parseStations() {
    const stationRows = this.rows.slice(this.headerCount());
    const hasRank = !isNaN(parseInt(stationRows[0][1]));
    const rawLines: RawLine[] = [{xPos: 0, stations: []}];
    stationRows.forEach(row => {
      const first = parseInt(row[0]); // ID or xPos
      const [name, rank] = hasRank ? [row[2], parseInt(row[1])] : [row[1], null];
      if(name) rawLines[rawLines.length - 1].stations.push({id: first, name: name, rank: StationRank.parse(rank)});
      else rawLines.push({xPos: first || 0, stations: []})
    });
    const lines = rawLines.map((line, idx) => new Line(idx + 1, line.stations, line.xPos));
    return new Lines(lines[0], lines.slice(1));
  }

  parseTrains(lines: Lines) {
    const speeds = this.rows[0].slice(2);
    const counts = this.rows[1].slice(2);
    const names = this.hasName ? this.rows[2].slice(2) : null;
    const train_stops: TrainStops[] = [];
    speeds.forEach(_ => train_stops.push(new TrainStops(lines, [])));
    this.rows.slice(this.headerCount()).forEach(row => {
      if(row[0]) {
        const stationId = parseInt(row[0]);
        const stops = row.slice(2);
        speeds.forEach((speed, idx) => {
          if(stops[idx]) {
            train_stops[idx].push(stationId);
          }
        });
      }
    });
    return train_stops.map((stops, idx) => {
      return new Train(stops, parseInt(speeds[idx]), parseInt(counts[idx]), names?.[idx]);
    });
  }

  private headerCount() {
    return this.hasName ? 3 : 2;
  }
}

type RawLine = {
  xPos: number,
  stations: Station[]
}
