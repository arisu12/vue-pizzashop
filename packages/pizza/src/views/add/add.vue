<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="model.name"
      :rules="rules.name"
      label="Name"
    ></v-text-field>
    <v-text-field
      v-model="model.price"
      :rules="rules.price"
      label="Price"
      type="number"
    ></v-text-field>
    <v-select
      v-model="model.ingredients"
      chips
      multiple
      item-text="name"
      item-value="id"
      :items="ingredients"
      label="Ingredients"
    ></v-select>
    <v-text-field
      :value="imgName"
      :rules="rules.image"
      label="Image"
      :readonly="true"
      @click="onImageClick"
    ></v-text-field>
    <input ref="image" type="file" hidden @change="onImageUpload" />
    <template v-if="model.image">
      <v-img :src="model.image"></v-img>
    </template>
    <v-btn
      class="pizza-add__button"
      type="button"
      :disabled="!valid"
      color="secondary"
      @click="create"
      >Create</v-btn
    >
  </v-form>
</template>
<script>
import {ingredientsModel} from '@ps/ingredients';
import {pizzaModel} from '../../domain';
export default {
  name: 'PizzaAdd',
  data() {
    return {
      valid: false,
      imgName: '',
      ingredients: ingredientsModel.getAll(),
      rules: pizzaModel.rules,
      model: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    ingredientsModel.load().then(() => {
      next();
    });
  },
  methods: {
    create() {
      const {name, price, ingredients = []} = this.model;
      pizzaModel.create({name, price, ingredients}).then(() => {
        this.model.image = null;
        this.$refs.form.reset();
      });
    },
    onImageClick() {
      this.$refs.image.click();
    },
    onImageUpload(ev) {
      const img = ev.target.files[0];
      this.imgName = img.name;
      this.model.image = window.URL.createObjectURL(img);
    },
  },
};
</script>
<style lang="postcss" scoped>
.pizza-add {
  &__button {
    color: var(--ps-color-text--secondary);
  }
}
</style>
