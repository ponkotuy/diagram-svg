//import * as csvParse from 'csv-parse/lib/sync';
//import * as Papa from 'papaparse'
import papa = require('papaparse');
import {FirstParser} from "./firstParser";

const OPTIONS = {headers: {"Content-Type": "text/csv"}};

document.getElementById('url_form').addEventListener('submit', saveJsonEvent);

console.log("OK");

function saveJsonEvent(event) {
  event.stopPropagation();
  event.preventDefault();
  saveJSON();
}

function saveJSON() {
  const input = <HTMLInputElement> document.getElementById('url');
  const url = input.value;
  console.log(url);
  fetch(url, OPTIONS).then(response => {
    response.text().then(text => {
      const records  = papa.parse(text).data;
      const first = new FirstParser(records);
      const result = JSON.stringify(first.parse(), null, 2);
      const a = document.createElement('a');
      const file = new Blob([result], {type: 'application/json'});
      a.href = URL.createObjectURL(file);
      a.download = 'file.json';
      a.click();
    });
  });
}
