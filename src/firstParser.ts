export class FirstParser {
  readonly rows: string[][];

  constructor(rows: string[][]) {
    this.rows = rows;
  }

  parse() {
    const lines = this.parseStations();
    const trains = this.parseTrains();
    const subLines = lines.slice(1).map((line, idx) => {
      return {'id': idx + 2, 'stations': line}
    });
    return {
      'mainLine': {'id': 1, 'stations': lines[0]},
      'subLines': subLines,
      'trains': trains
    };
  }

  parseStations() {
    const stationRows = this.rows.slice(2);
    const lines = [[]];
    stationRows.forEach(row => {
      const [idRow, name] = row;
      if(idRow) lines[lines.length - 1].push({id: parseInt(idRow), name: name});
      else lines.push([])
    });
    return lines;
  }

  parseTrains() {
    const speeds = this.rows[0].slice(2);
    const counts = this.rows[1].slice(2);
    const train_stops = [];
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
        'stations': this.removeDuplicateStop(stops),
        'speed': speeds[idx],
        'count': counts[idx]
      };
    });
  }

  private removeDuplicateStop(stops) {
    const result = [];
    stops.forEach(stop => {
      if(result.length == 0 || stop != result[result.length - 1]) result.push(stop);
    });
    return result;
  }
}
