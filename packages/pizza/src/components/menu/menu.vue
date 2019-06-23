<template>
  <v-tabs icons-and-text hide-slider>
    <div
      v-for="item in menuItems"
      :key="item.route"
      class="horizontal pizza__menu"
    >
      <router-link
        active-class="pizza__menu__item--active"
        class="vertical pizza__menu__item"
        :to="{name: item.route}"
        :exact="true"
      >
        <v-tab>
          <span class="pizza__menu__content">{{ item.label }}</span>
          <v-icon class="pizza__menu__content">{{ item.icon }}</v-icon>
        </v-tab>
      </router-link>
    </div>
  </v-tabs>
</template>
<script>
import {menuItems} from './menu-items';

export default {
  name: 'PizzaMenu',
  data() {
    return {
      menuItems,
    };
  },
};
</script>
<style lang="postcss" scoped>
.pizza {
  &__menu {
    justify-content: space-around;
    width: 100%;
    background-color: var(--ps-color-primary);
    &__item {
      text-decoration: none;
      &--active {
        background-color: var(--ps-color-primary--dark);
      }
    }
    &__content {
      color: var(--ps-color-text--primary);
    }
  }
}
</style>
