import {Router} from '@ps/router';

Router.register({
  path: ':id',
  name: 'pizza-detail',
  parent: 'pizza',
  props: true,
  component: () =>
    import(/* webpackChunkName: "pizza-detail" */ './detail.vue'),
});
