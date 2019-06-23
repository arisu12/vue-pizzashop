import {Router} from '@ps/router';
Router.register({
  path: 'add',
  name: 'pizza-add',
  parent: 'pizza',
  component: () => import(/* webpackChunkName: "pizza-add" */ './add.vue'),
});
