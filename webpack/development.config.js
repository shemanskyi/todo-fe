const {
  merge
} = require('webpack-merge');

const common = require('./common.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css'
})];

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins,
  target: 'web'
});