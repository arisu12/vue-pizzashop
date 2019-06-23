class IngredientsStore {
  constructor() {
    this._ingredients = [];
  }
  set(ingredients) {
    this._ingredients = ingredients;
  }
  getAll() {
    return this._ingredients;
  }
}

export const ingredientsStore = new IngredientsStore();
