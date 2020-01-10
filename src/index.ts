import Snap from 'snapsvg';

const mainLine = {
  id: 1,
  stations: [
    {id: 50, name: '金沢八景'},
    {id: 58, name: '汐入'},
    {id: 59, name: '横須賀中央'},
    {id: 61, name: '堀ノ内'},
    {id: 67, name: '京急久里浜'}
  ]
};
const subLines = [
  {
    id: 2,
    stations: [
      {id: 61, name: '堀ノ内'},
      {id: 64, name: '浦賀'}
    ]
  }
];
const trains = [
  {
    stations: [50, 59, 61, 67],
    count: 3
  },
  {
    stations: [50, 58, 59, 61, 64],
    count: 3
  }
];

mainLine.stations.forEach((station, idx) => {
  station['idx'] = idx;
});

const STATION_HEIGHT = 40;
const LINE_WIDTH = 28;
const STATION_FONT = {'font-size': 24};
const mainLineWidth = LINE_WIDTH * trains.map(t => t.count).reduce((x, y) => x + y);

const calcPositions = () => {
  const positions = {};
  mainLine.stations.forEach(station => {
    positions[station.id] = {
      x: (LINE_WIDTH >> 1),
      y: (STATION_HEIGHT >> 1) + station.idx * STATION_HEIGHT
    }
  });

  subLines.forEach((line, lineIdx) => {
    const startIdx = mainLine.stations.find(st => st.id === line.stations[0].id).idx;
    line.stations.slice(1).forEach((station, idx) => {
      positions[station.id] = {
        x: (LINE_WIDTH >> 1) + mainLineWidth,
        y: (STATION_HEIGHT >> 1) + (startIdx + idx + 1) * STATION_HEIGHT
      }
    });
  });
  return positions;
};

const stationPosition = calcPositions();

const snap = Snap('#svg');
let mainStationNameSize = 0;

mainLine.stations.forEach((st, idx) => {
  const pos = stationPosition[st.id];
  st.text = snap.text(0, pos.y + 12, st.name);
  st.text.attr(STATION_FONT);
  mainStationNameSize = Math.max(mainStationNameSize, st.text.node.getBBox().width)
});

let subStationNameSize = 0;

const subStationNameX = mainStationNameSize + mainLineWidth + 12;
subLines.forEach(line => {
  line.stations.slice(1).forEach(station => {
    const pos = stationPosition[station.id];
    station.text = snap.text(subStationNameX, pos.y + 12, station.name);
    station.text.attr(STATION_FONT);
  });
});

let count = 0;

trains.forEach(train => {
  for (let i = 0; i < train.count; i++) {
    let before = null;
    train.stations.forEach(station => {
      const st_pos = stationPosition[station];
      const pos = {x: mainStationNameSize + 12 + st_pos.x + count * LINE_WIDTH, y: st_pos.y};
      snap.circle(pos.x, pos.y, STATION_HEIGHT >> 3);
      if(before) {
        const line = snap.line(before.x, before.y, pos.x, pos.y);
        line.attr({strokeWidth: 2, stroke: 'black'});
      }
      before = pos;
    });
    count++;
  }
});
