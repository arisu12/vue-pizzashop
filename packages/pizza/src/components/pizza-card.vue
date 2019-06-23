<template>
  <v-card width="400">
    <v-img
      class="pizza-card__img"
      :src="pizza.img"
      :lazy-src="pizza.imgmin"
    ></v-img>

    <v-card-title class="pizza-card__title">
      <span class="pizza-card__title__text">
        {{ pizza.name }}
      </span>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  name: 'PizzaCard',
  props: {
    pizza: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style lang="postcss" scoped>
.pizza-card {
  &__title {
    background-color: var(--ps-color-secondary);
    &__text {
      color: var(--ps-color-text--secondary);
      text-align: center;
      width: 100%;
    }
  }
  &__img {
    padding: var(--ps-padding-small);
  }
}
</style>
