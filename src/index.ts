import Raphael = require('raphael');
import {Drawer} from "./drawer";
import {Line} from "./line";
import {Train, TrainObj} from "./train";

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
      {id: 99, name: '浦賀'}
    ]
  }
];
const trains: TrainObj[] = [
  {
    stations: [50, 59, 61, 67],
    speed: 7,
    count: 3
  },
  {
    stations: [50, 58, 59, 61, 99],
    speed: 1,
    count: 3
  }
];

const snap = Raphael('svg', 640, 480);
const main = new Line(mainLine);
const sub = subLines.map(line => new Line(line));
const ts = trains.map(train => new Train(train));
const drawer = new Drawer(snap, main, sub, ts);
drawer.drawMain();
drawer.drawSub();
drawer.drawTrain();
