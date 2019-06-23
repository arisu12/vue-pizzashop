<template>
  <div>
    <h2 class="pizza__header">Pizza</h2>
    <pizza-menu></pizza-menu>
    <router-view></router-view>
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
  beforeRouteEnter(to, from, next) {
    pizzaModel.getPizzas().then(next);
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
