export const mutations = {
  setPizzas(state, pizzas) {
    state.pizzas = pizzas;
  },
  addPizza(state, pizza) {
    state.pizzas = [...state.pizzas, pizza];
  },
};
