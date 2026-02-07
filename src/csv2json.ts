import * as papa from 'papaparse';
import {FirstParser} from "./csv2json/firstParser";
import {DiagramAttrs} from "./csv2json/diagramAttrs";

const OPTIONS = {headers: {"Content-Type": "text/csv"}};

const urlForm = document.getElementById('url_form');
urlForm && urlForm.addEventListener('submit', saveJsonEvent);

function saveJsonEvent(event: Event) {
  event.stopPropagation();
  event.preventDefault();
  saveJSON();
}

function getValueFromElementId(id: string) {
  const input = <HTMLInputElement> document.getElementById(id);
  return input.value;
}

function saveJSON() {
  const url = getValueFromElementId('url');
  const title = getValueFromElementId('title');
  const author = getValueFromElementId('author');
  const company = getValueFromElementId('company');
  const region = getValueFromElementId('region');
  const attrs = new DiagramAttrs(title, author, company, region);
  fetch(url, OPTIONS).then(response => {
    response.text().then(text => {
      const records  = papa.parse<string[]>(text).data;
      const first = new FirstParser(records, attrs);
      const result = JSON.stringify(first.parse(), null, 2);
      const a = document.createElement('a');
      const file = new Blob([result], {type: 'application/json'});
      a.href = URL.createObjectURL(file);
      a.download = 'file.json';
      a.click();
    });
  });
}
