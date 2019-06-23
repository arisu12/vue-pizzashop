export const actions = {
  async getPizzas({commit}, {http}) {
    const {data} = await http.get();
    commit('setPizzas', data);
  },
  async addPizza({commit}, {http, pizza}) {
    const {data} = await http.post('', pizza);
    commit('addPizza', data);
  },
};
