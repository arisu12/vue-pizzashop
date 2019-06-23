const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const {resolve} = require('../util');
const {loadDev} = require('../env');

loadDev();

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    open: true,
    progress: true,
    stats: 'minimal',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
