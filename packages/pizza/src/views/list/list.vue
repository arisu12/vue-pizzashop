<template>
  <div class="horizontal fill pizza-list__items">
    <router-link
      v-for="pizza in pizzas"
      :key="pizza.id"
      :to="{name: 'pizza-detail', params: {id: pizza.id}}"
      class="pizza-list__link"
    >
      <pizza-card :pizza="pizza" class="pizza-list__item"></pizza-card>
    </router-link>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex';
import {PizzaCard} from '../../components';
const {mapState} = createNamespacedHelpers('pizza');

export default {
  name: 'PizzaList',
  components: {
    PizzaCard,
  },
  computed: {
    ...mapState(['pizzas']),
  },
};
</script>

<style lang="postcss" scoped>
.pizza-list {
  &__items {
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  &__item {
    margin: var(--ps-margin-medium);
  }
  &__link {
    text-decoration: none;
  }
}
</style>
