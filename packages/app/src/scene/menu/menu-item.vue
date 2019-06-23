<template>
  <router-link
    active-class="menu-item--active"
    class="menu-item"
    :to="{name: item.route}"
    :exact="item.exact"
  >
    <v-list-tile>
      <v-list-tile-action>
        <v-icon class="menu-item__icon">{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.label }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </router-link>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="postcss">
.menu-item {
  color: var(--ps-color-text--primary);
  text-decoration: none;
  display: block;
  &__icon {
    color: var(--ps-color-secondary--light);
  }
  &--active {
    background-color: var(--ps-color-primary--dark);
  }
}
</style>
