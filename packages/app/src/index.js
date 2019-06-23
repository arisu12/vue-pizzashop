import Vue from 'vue';
import VueRouter from 'vue-router';
import {Router} from '@ps/router';
import {store} from '@ps/store';
import App from './app.vue';

Vue.use(VueRouter);

export const appModule = new Vue({
  router: Router.create(),
  store,
  render: (h) => h(App),
});
