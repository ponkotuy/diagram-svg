import _ = require('lodash');

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
    const mainLine = {'id': 1, 'stations': lines[0].stations};
    const subLines = lines.slice(1).map((line, idx) => {
      return {'id': idx + 2, 'stations': line.stations, 'xPos': line.xPos}
    });
    subLines.forEach(sub => this.addForwardTransfers(mainLine, sub));
    const trains = this.parseTrains();
    return {
      'mainLine': mainLine,
      'subLines': subLines,
      'trains': trains,
      'title': this.title,
      'author': this.author
    };
  }

  private addForwardTransfers(main: Line, sub: Line) {
    const mainStations = main.stations.map(st => st.id);
    const idx = _.findIndex(sub.stations, st => mainStations.indexOf(st.id) != -1);
    sub.stations.slice(0, idx).forEach(st => this.forwardTransfers.add(st.id));
  }

  parseStations() {
    const stationRows = this.rows.slice(2);
    const lines: RawLine[] = [{xPos: 0, stations: []}];
    stationRows.forEach(row => {
      const [idRow, name] = row;
      if(name) lines[lines.length - 1].stations.push({id: parseInt(idRow), name: name});
      else lines.push({xPos: parseInt(idRow) || 0, stations: []})
    });
    return lines;
  }

  parseTrains() {
    const speeds = this.rows[0].slice(2);
    const counts = this.rows[1].slice(2);
    const train_stops: number[][] = [];
    speeds.forEach(_ => train_stops.push([]));
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
      return {
        'stations': this.sortStop(stops),
        'speed': parseInt(speeds[idx]),
        'count': parseInt(counts[idx])
      };
    });
  }

  private sortStop(stops: number[]) {
    const forward: number[] = [];
    const normal: number[] = [];
    stops.forEach(stop => {
      if(normal.length == 0 || normal.indexOf(stop) == -1) {
        if(this.forwardTransfers.has(stop)) forward.push(stop);
        else normal.push(stop);
      }
    });
    return forward.concat(normal);
  }
}

type Line = {
  id: number
  stations: Station[]
}

type Station = {
  id: number
  name: string
}

type RawLine = {
  xPos: number,
  stations: Station[]
}
