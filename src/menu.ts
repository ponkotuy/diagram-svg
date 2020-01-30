import Vue from 'vue'
import Component from "vue-class-component";

@Component({
  props: {}
})
export default class App extends Vue {
  svgs = [];

  mounted () {
    fetch('./svg_list.json').then(response => {
      response.json().then(json => {
        this.svgs = json;
      })
    });
  }

  href(url) {
    return `index.html?url=${url}`;
  }
}

const app = new App({el: '#menu'});
