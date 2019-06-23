import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const DOC_STYLE = getComputedStyle(document.documentElement);

const prop = (name) => {
  return DOC_STYLE.getPropertyValue(name).trim();
};

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    'primary': prop('--ps-color-primary'),
    'secondary': prop('--ps-color-secondary'),
    'primary--light': prop('--ps-color-primary--light'),
    'primary--dark': prop('--ps-color-primary--dark'),
    'secondary--light': prop('--ps-color-secondary--light'),
    'secondary--dark': prop('--ps-color-secondary--dark'),
    'text--primary': prop('--ps-color-text--primary'),
    'text--secondary': prop('--ps-color-text--secondary'),
    'error': prop('--ps-color-error'),
    'info': prop('--ps-color-info'),
    'success': prop('--ps-color-success'),
    'warning': prop('--ps-color-warning'),
  },
});
