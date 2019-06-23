<template>
  <v-toolbar class="toolbar" app>
    <div class="horizontal toolbar__content">
      <template v-if="showIcon">
        <v-toolbar-side-icon
          class="toolbar__icon"
          @click="_onButtonClick"
        ></v-toolbar-side-icon>
      </template>
      <v-toolbar-title>
        <h1>Pizza Shop</h1>
      </v-toolbar-title>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    showIcon: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    _onButtonClick() {
      this.$emit('button-click');
    },
  },
};
</script>

<style scoped lang="postcss">
.toolbar {
  color: var(--ps-color-text--primary);
  background-color: var(--ps-color-primary);
  &__content {
    justify-content: space-between;
    width: 100%;
  }
  &__icon {
    color: var(--ps-color-text--primary);
  }
}
</style>
