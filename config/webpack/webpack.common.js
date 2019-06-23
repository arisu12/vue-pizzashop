const webpack = require('webpack');
const globby = require('globby');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {resolve} = require('../util');
const {isDev} = require('../env');

const hash = () => (isDev() ? '[hash]' : '[contenthash:8]');

module.exports = () => ({
  bail: true,
  entry: [
    ...globby.sync(resolve('packages/*/src/**/*.route.js')),
    '@ps/bootstrap',
  ],
  output: {
    filename: `static/js/[name].${hash()}.js`,
    chunkFilename: `static/js/[name].${hash()}.js`,
    path: resolve('dist'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: null,
      silent: true,
      safe: true,
      systemvars: true,
    }),
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: `static/css/[name].${hash()}.css`,
      chunkFilename: `static/css/[name].${hash()}.css`,
    }),
    new CopyWebpackPlugin([{from: resolve('public'), ignore: ['index.html']}]),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          isDev() ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-nested')(),
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        enforce: 'pre',
        loader: 'image-webpack-loader',
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: `static/media/[name].${hash()}.[ext]`,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true,
          name: `static/media/[name].${hash()}.[ext]`,
        },
      },
    ],
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
});
