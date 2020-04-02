import {Line, LineObj, SubLine} from "./common/line";
import {Train} from "./common/train";
import {Drawer} from "./index/drawer";

QUnit.test("first", (assert) => {
  assert.ok(true, "Passed!");
});

draw('old', 'test_data/keio.json');
draw('new', 'test_data/jr_nishi_hanwa.json');
draw('20200325', 'test_data/odakyu.json');
draw('20200402', 'test_data/keikyu.json');

function draw(id: string, url: string) {
  fetch(url).then(res => {
    res.json().then(json => {
      if(!isJsonObj(json)) return;
      const main = Line.fromObj(json.mainLine);
      const sub = json.subLines.map(line => new SubLine(Line.fromObj(line), main));
      const ts = json.trains.map(train => new Train(train));
      const drawer = new Drawer(id, main, sub, ts);
      drawer.draw();
    });
  });
}

type JsonObj = {
  mainLine: LineObj
  subLines: LineObj[]
  trains: Train[]
}

function isJsonObj(arg: any): arg is JsonObj {
  return arg;
}
