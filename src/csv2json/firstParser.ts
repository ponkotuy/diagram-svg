import _ = require('lodash');
import {Lines, Train} from "./lines";
import {TrainStops} from "./trainStops";
import {Line, Station} from "../common/line";

export class FirstParser {
  readonly rows: string[][];
  readonly title: string;
  readonly author: string;
  readonly forwardTransfers: Set<number> = new Set();

  constructor(rows: string[][], title: string, author: string) {
    this.rows = rows;
    this.title = title;
    this.author = author;
  }

  parse() {
    const lines = this.parseStations();
    lines.subs.forEach(sub => this.addForwardTransfers(lines.main, sub));
    const trains = this.parseTrains(lines);
    return lines.toJSON(trains, this.title, this.author);
  }

  private addForwardTransfers(main: Line, sub: Line) {
    const mainStations = main.stations.map(st => st.id);
    const idx = _.findIndex(sub.stations, st => mainStations.indexOf(st.id) != -1);
    sub.stations.slice(0, idx).forEach(st => this.forwardTransfers.add(st.id));
  }

  parseStations() {
    const stationRows = this.rows.slice(2);
    const rawLines: RawLine[] = [{xPos: 0, stations: []}];
    stationRows.forEach(row => {
      const [idRow, name] = row;
      if(name) rawLines[rawLines.length - 1].stations.push({id: parseInt(idRow), name: name});
      else rawLines.push({xPos: parseInt(idRow) || 0, stations: []})
    });
    const lines = rawLines.map((line, idx) => new Line(idx + 1, line.stations, line.xPos));
    return new Lines(lines[0], lines.slice(1));
  }

  parseTrains(lines: Lines) {
    const speeds = this.rows[0].slice(2);
    const counts = this.rows[1].slice(2);
    const train_stops: TrainStops[] = [];
    speeds.forEach(_ => train_stops.push(new TrainStops(lines, [])));
    this.rows.slice(2).forEach(row => {
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
      return new Train(stops, parseInt(speeds[idx]), parseInt(counts[idx]));
    });
  }
}

type RawLine = {
  xPos: number,
  stations: Station[]
}