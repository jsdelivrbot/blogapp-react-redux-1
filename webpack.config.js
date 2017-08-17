'use strict';

require('dotenv').config();
const {DefinePlugin} = require('webpack');

let plugins = [
  new DefinePlugin({
    __API_KEY__: JSON.stringify(process.env.API_KEY),
  }),
];

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins,
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
