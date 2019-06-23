import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {Router} from '@ps/router';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

export const appModule = new Vue({
  router: Router.create(),
  render: (h) => h(App),
});
