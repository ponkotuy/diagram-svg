import {Drawer} from "./drawer";
import {Line} from "./line";
import {Train} from "./train";

fetch('./data/keikyu.json').then(res => {
  res.json().then(json => {
    const main = new Line(json.mainLine);
    const sub = json.subLines.map(line => new Line(line));
    const ts = json.trains.map(train => new Train(train));
    const drawer = new Drawer(main, sub, ts);
    drawer.drawMain();
    drawer.drawSub();
    drawer.drawTrain();
  });
});
