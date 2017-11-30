/*
    ./webpack.config.js
*/

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['es2015','react']
    }
},
    ]
  }
}