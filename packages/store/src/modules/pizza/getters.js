export const getters = {
  getPizzaById(state) {
    return (id) => state.pizzas.find((pizza) => pizza.id === id);
  },
};
