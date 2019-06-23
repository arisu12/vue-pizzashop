import {actions} from './actions';
import {getters} from './getters';
import {mutations} from './mutations';
import {state} from './state';

export const pizzaModule = {
  actions,
  getters,
  mutations,
  state,
  namespaced: true,
};
