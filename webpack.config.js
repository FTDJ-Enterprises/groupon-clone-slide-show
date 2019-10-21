const path = require('path');

module.exports = {
  entry: {
    main: './client/index.jsx',
    vendor: ['styled-components'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  optimization: {
    splitChunks: {
      minChunks: Infinity,
      name: true
    },
    runtimeChunk: {
      name: 'vendor'
    }
  }
};
