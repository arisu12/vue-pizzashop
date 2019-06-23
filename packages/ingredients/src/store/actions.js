export const actions = {
  async getIngredients({commit}, {http}) {
    const {data} = await http.get();
    commit('setIngredients', data);
  },
};
