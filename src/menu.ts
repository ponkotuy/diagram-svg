import Vue from 'vue'
import Component from "vue-class-component";

@Component({
  props: {}
})
export default class App extends Vue {
  svgs: Svg[] = [];

  mounted () {
    fetch('./svg_list.json').then(response => {
      response.json().then(json => {
        this.svgs = json;
      })
    });
  }

  href(url: Svg) {
    return `index.html?url=${url.file}`;
  }
}

const app = new App({el: '#menu'});

type Svg = {
  file: string
  name: string
  author: string
}
