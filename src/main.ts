// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';

let thing = 'hello';

// Vue.config.productionTip = false;
const v = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
