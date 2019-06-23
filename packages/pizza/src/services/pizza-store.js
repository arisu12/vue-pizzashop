class PizzaStore {
  constructor() {
    this._pizzas = [];
  }
  get(id) {
    return this._pizzas.find((pizza) => {
      return pizza.id === id;
    });
  }
  set(pizzas) {
    this._pizzas = pizzas;
  }
}

export const pizzaStore = new PizzaStore();
