import {createNamespacedHelpers} from 'vuex';
import {store} from '@ps/store';
import {actions} from './actions';
import {getters} from './getters';
import {mutations} from './mutations';
import {state} from './state';

const namespace = 'pizza';

store.registerModule(namespace, {
  actions,
  getters,
  mutations,
  state,
  namespaced: true,
});

export const pizzaStore = createNamespacedHelpers(namespace);
