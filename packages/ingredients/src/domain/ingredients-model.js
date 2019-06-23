import {ingredientsHTTP, ingredientsStore} from '../services';

export class IngredientsModel {
  constructor(http, store) {
    this._http = http;
    this._store = store;
  }
  load() {
    return this._http.get().then(({data}) => {
      this._store.set(data);
    });
  }
  getAll() {
    return this._store.getAll();
  }
}

export const ingredientsModel = new IngredientsModel(
  ingredientsHTTP,
  ingredientsStore
);
