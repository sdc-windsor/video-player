const path = require('path');
require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', './client/src/components/Index.jsx'],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ['css-loader', 'style-loader']
      }
    ]
  }
}