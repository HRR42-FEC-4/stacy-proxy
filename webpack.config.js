const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    product: './dave-service/client/index.jsx',
    carousel: './stacy-service/client/src/index.jsx',
    reviews: './katie-service/client/index.jsx'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};