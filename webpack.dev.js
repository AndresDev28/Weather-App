/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
    hot: true,
    watchFiles: ['./src/**/*.{js,css,html}'],
  },
});
