<template>
  <v-navigation-drawer class="vertical menu" :value="opened" stateless app>
    <v-img class="menu__image" :src="appIcon"></v-img>
    <v-list v-for="item in menuItems" :key="item.route">
      <app-menu-item :item="item"></app-menu-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import AppMenuItem from './menu-item.vue';
import appIcon from './app-icon.png';
import {menuItems} from './menu-items';

export default {
  name: 'AppMenu',
  components: {
    AppMenuItem,
  },
  props: {
    opened: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      appIcon,
      menuItems,
    };
  },
};
</script>

<style scoped lang="postcss">
.menu {
  background-color: var(--ps-color-primary);
  &__image {
    background-color: var(--ps-color-secondary);
  }
  &__item {
    color: var(--ps-color-text--primary);
    text-decoration: none;
  }
}
</style>
