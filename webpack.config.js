const webpack = require('webpack');

exports.entry = __dirname + '/app/main.js';
exports.output = {
  path: __dirname + '/.build',
  filename: 'app.js'
};

exports.module = {
  loaders: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
  ]
};
exports.devtool = 'source-map';
