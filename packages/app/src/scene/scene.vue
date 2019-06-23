<template>
  <div>
    <app-menu :opened="menuOpened"></app-menu>
    <app-toolbar
      :show-icon="showIcon"
      @button-click="_toggleDrawer"
    ></app-toolbar>
    <app-content></app-content>
  </div>
</template>

<script>
import AppMenu from './menu/menu.vue';
import AppContent from './content.vue';
import AppToolbar from './toolbar.vue';

export default {
  name: 'AppScene',
  components: {AppContent, AppMenu, AppToolbar},
  data() {
    return {
      open: true,
      docked: true,
    };
  },
  computed: {
    menuOpened() {
      return this.docked || this.open;
    },
    showIcon() {
      return !this.docked;
    },
  },
  beforeMount() {
    this._media = window.matchMedia('(min-width: 1200px)');
    this._media.addListener(this._onMediaChanges);
    this._onMediaChanges(this._media);
  },
  beforeDestroy() {
    this._media.removeListener(this._onMediaChanges);
    this._media = null;
  },
  methods: {
    _onMediaChanges(media) {
      this.docked = media.matches;
      this.open = media.matches;
    },
    _toggleDrawer() {
      this.open = !this.open;
    },
  },
};
</script>
