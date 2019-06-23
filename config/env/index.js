const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const {resolve} = require('../util');

const configure = (envFile) => () => {
  dotenvExpand(
    dotenv.config({
      path: resolve(envFile),
    })
  );
};

const loadDev = configure('config/env/.env.dev');
const loadProd = configure('config/env/.env.prod');
const isProd = () => process.env.NODE_ENV === 'production';
const isDev = () => process.env.NODE_ENV === 'development';

module.exports = {
  loadDev,
  loadProd,
  isProd,
  isDev,
};
