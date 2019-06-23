<template>
  <div>
    <h2 class="pizza__header">Pizza</h2>
    <pizza-menu></pizza-menu>
    <template v-if="pizzasReady">
      <router-view :pizzas="pizzas"></router-view>
    </template>
  </div>
</template>
<script>
import {pizzaModel} from './domain';
import {PizzaMenu} from './components';
export default {
  name: 'Pizza',
  components: {
    PizzaMenu,
  },
  data() {
    return {
      pizzas: [],
      pizzasReady: false,
    };
  },
  created() {
    pizzaModel.getAll().then((pizzas) => {
      this.pizzas = pizzas;
      this.pizzasReady = true;
    });
  },
};
</script>
<style lang="postcss" scoped>
.pizza {
  &__header {
    text-align: center;
    background-color: var(--ps-color-secondary);
  }
}
</style>
