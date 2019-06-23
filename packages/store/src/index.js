import Vue from 'vue';
import Vuex from 'vuex';
import {pizzaModule, ingredientsModule} from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    pizza: pizzaModule,
    ingredients: ingredientsModule,
  },
  strict: process.env.NODE_ENV === 'development',
});
