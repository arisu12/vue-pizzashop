import {Router} from '@ps/router';

Router.register({
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ './home.vue'),
});
