import {Drawer} from "./drawer";
import {Line} from "./line";
import {Train} from "./train";

document.getElementById('url_form').addEventListener('submit', set_url_event);

const params = new URLSearchParams(location.search);

const input = <HTMLInputElement> document.getElementById('url');

const url = params.get('url');
if(url) {
  input.value = decodeURI(url);
}

if(!input.value) {
  input.value = `${location.toString()}data/keikyu.json`;
}

set_url();

function set_url_event(event) {
  event.stopPropagation();
  event.preventDefault();
  set_url();
}

function set_url() {
  const params = new URLSearchParams();
  params.append('url', input.value);
  history.replaceState('', '', '?' + params.toString());
  draw(input.value);
}

let drawer: Drawer | null = null;

function draw(url) {
  console.log(url);
  if(drawer) drawer.clear();
  fetch(url).then(res => {
    res.json().then(json => {
      const main = new Line(json.mainLine);
      const sub = json.subLines.map(line => new Line(line));
      const ts = json.trains.map(train => new Train(train));
      drawer = new Drawer(main, sub, ts);
      drawer.draw();
    });
  });
}

