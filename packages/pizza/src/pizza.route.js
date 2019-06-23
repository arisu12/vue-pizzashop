import {Router} from '@ps/router';

Router.register({
  path: '/pizza',
  name: 'pizza',
  component: () => import(/* webpackChunkName: "pizza" */ './pizza.vue'),
});
