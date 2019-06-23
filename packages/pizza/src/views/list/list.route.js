import {Router} from '@ps/router';

Router.register({
  path: '',
  name: 'pizza-list',
  parent: 'pizza',
  component: () => import(/* webpackChunkName: "pizza-list" */ './list.vue'),
});
