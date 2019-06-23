import {store} from '@ps/store';
import {pizzaHTTP} from '../services';
import {pizzaRules} from './rules';

export class PizzaModel {
  constructor(http, store) {
    this._http = http;
    this._store = store;
    this._loaded = false;
  }
  get rules() {
    return pizzaRules;
  }
  getPizzas() {
    return this._store.dispatch('pizza/getPizzas', {http: this._http});
  }
  addPizza(pizza) {
    return this._store.dispatch('pizza/addPizza', {http: this._http, pizza});
  }
}

export const pizzaModel = new PizzaModel(pizzaHTTP, store);
