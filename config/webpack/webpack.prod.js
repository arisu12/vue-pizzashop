const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');
const {resolve} = require('../util');
const {loadProd} = require('../env');

loadProd();

module.exports = merge(common(), {
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'production',
  performance: {
    hints: 'warning',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: false,
        keepClosingSlash: true,
        minifyURLs: true,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: resolve('logs/bundle.html'),
      openAnalyzer: false,
    }),
  ],
});
