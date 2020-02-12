import {Drawer} from "./drawer";
import {Line, LineObj, SubLine} from "./line";
import {Train, TrainObj} from "./train";

document.getElementById('url_form')?.addEventListener('submit', setUrlEvent);
document.getElementById('save_svg')?.addEventListener('click', saveSvg);

const params = new URLSearchParams(location.search);

const input = <HTMLInputElement> document.getElementById('url');

const url = params.get('url');
if(url) {
  input.value = decodeURI(url);
}

if(!input.value) {
  input.value = `${location.toString()}data/keikyu.json`;
}

setUrl();

function setUrlEvent(event: Event) {
  event.stopPropagation();
  event.preventDefault();
  setUrl();
}

function setUrl() {
  const params = new URLSearchParams();
  params.append('url', input.value);
  history.replaceState('', '', '?' + params.toString());
  draw(input.value);
}

let drawer: Drawer | null = null;

function draw(url: string) {
  if(drawer) drawer.clear();
  fetch(url).then(res => {
    res.json().then(json => {
      if(!isJsonObj(json)) return;
      const main = new Line(json.mainLine);
      const sub = json.subLines.map(line => new SubLine(line, main));
      const ts = json.trains.map(train => new Train(train));
      drawer = new Drawer(main, sub, ts);
      drawer.draw();
    });
  });
}

function saveSvg() {
  const svg = document.getElementById('svg')!.innerHTML;
  const a = document.createElement('a');
  const file = new Blob([svg], {type: 'image/svg+xml'});
  a.href = URL.createObjectURL(file);
  a.download = 'file.svg';
  a.click();
}

type JsonObj = {
  mainLine: LineObj
  subLines: LineObj[]
  trains: Train[]
}

function isJsonObj(arg: any): arg is JsonObj {
  return arg;
}
