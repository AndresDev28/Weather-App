// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/extensions
const path = require('path');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/mi-app/', // Ajusta esto al nombre de tu repositorio en GitHub Pages
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
