import {store} from '@ps/store';
import {ingredientsHTTP} from '../services';

export class IngredientsModel {
  constructor(http, store) {
    this._http = http;
    this._store = store;
  }
  getIngredients() {
    return this._store.dispatch('ingredients/getIngredients', {
      http: this._http,
    });
  }
}

export const ingredientsModel = new IngredientsModel(ingredientsHTTP, store);
