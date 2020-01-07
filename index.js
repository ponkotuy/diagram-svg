
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

const HEIGHT = 480;
const STATION_WIDTH = 40;
const LINE_HEIGHT = 30;
const stationPosition = {};

mainLine.stations.forEach(station => {
  stationPosition[station.id] = {
    x: (STATION_WIDTH >> 1) + station.idx * STATION_WIDTH,
    y: (LINE_HEIGHT >> 1)
  }
});

subLines.forEach((line, lineIdx) => {
  const startIdx = mainLine.stations.find(st => st.id === line.stations[0].id).idx;
  line.stations.slice(1).forEach((station, idx) => {
    stationPosition[station.id] = {
      x: (STATION_WIDTH >> 1) + (startIdx + idx + 1) * STATION_WIDTH,
      y: (LINE_HEIGHT >> 1) + LINE_HEIGHT * 6
    }
  });
});

const snap = Snap('#svg');
let count = 0;

trains.forEach(train => {
  for (let i = 0; i < train.count; i++) {
    train.stations.forEach(station => {
      const pos = stationPosition[station];
      snap.circle(pos.x, HEIGHT - (pos.y + count * LINE_HEIGHT), STATION_WIDTH >> 3);
    });
    count++;
  }
});
