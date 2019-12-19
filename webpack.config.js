const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const hwp = new htmlWebpackPlugin({
  template: path.join(__dirname, 'examples/index.html'),
  filename: './index.html'
})

module.exports = {
  entry: path.join(__dirname, 'examples/index.js'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(css|less)$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  plugins: [hwp],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  stats: {
    entrypoints: false,
    children: false,
    modules: false,
    errors: true,
    errorDetails: true,
    warnings: true
  },
  devServer: {
    stats: {
      assets: false,
      entrypoints: false,
      children: false,
      modules: false,
      errors: true,
      errorDetails: true,
      warnings: true
    }
  }
}