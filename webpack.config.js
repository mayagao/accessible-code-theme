/*
    ./webpack.config.js
*/


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  alias: {'~': path.resolve(__dirname)}
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}