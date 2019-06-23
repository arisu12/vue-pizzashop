<template>
  <div class="pizza-detail">
    <pizza-card :pizza="pizza"></pizza-card>
  </div>
</template>
<script>
import {PizzaCard} from '../../components';
import {pizzaModel} from '../../domain';
export default {
  name: 'PizzaDetail',
  components: {
    PizzaCard,
  },
  props: {
    id: {
      type: [Number, String],
    },
  },
  data() {
    return {
      pizza: null,
    };
  },
  beforeMount() {
    const pizza = pizzaModel.find(this.id);
    if (!pizza) {
      this.$router.replace({name: 'pizza-list'});
    } else {
      this.pizza = pizza;
    }
  },
};
</script>
<style lang="postcss" scoped>
.pizza-detail {
  margin-top: var(--ps-margin-small);
}
</style>
