<template>
  <v-app>
    <app-scene></app-scene>
  </v-app>
</template>

<script>
import AppScene from './scene/scene.vue';
export default {
  name: 'App',
  components: {AppScene},
  data: function() {
    return {
      world: 'World',
      text: '',
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
  display: flex;
  flex-direction: column;
}
</style>
