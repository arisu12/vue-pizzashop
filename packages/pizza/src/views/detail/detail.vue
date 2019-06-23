<template>
  <div class="pizza-detail">
    <pizza-card :pizza="getPizzaById(pizzaId)"></pizza-card>
  </div>
</template>
<script>
import {PizzaCard} from '../../components';
import {pizzaStore} from '../../store';

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
  computed: {
    ...pizzaStore.mapGetters(['getPizzaById']),
    pizzaId() {
      return Number(this.id);
    },
  },
  beforeMount() {
    const pizza = this.getPizzaById(this.pizzaId);
    if (!pizza) {
      this.$router.replace({name: 'pizza-list'});
    }
  },
};
</script>
<style lang="postcss" scoped>
.pizza-detail {
  margin-top: var(--ps-margin-small);
}
</style>
