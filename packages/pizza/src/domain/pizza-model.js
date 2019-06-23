import {pizzaHTTP, pizzaStore} from '../services';
import {pizzaRules} from './rules';

export class PizzaModel {
  constructor(http) {
    this._http = http;
  }
  get rules() {
    return pizzaRules;
  }
  getAll() {
    return this._http.get().then(({data}) => {
      pizzaStore.set(data);
      return data;
    });
  }
  create({ingredients, name, price}) {
    return this._http.post('', {
      ingredients: [...ingredients],
      name,
      price,
    });
  }
  find(id) {
    return pizzaStore.get(Number(id));
  }
}

export const pizzaModel = new PizzaModel(pizzaHTTP);
