/*
  loader:1.下载 2.使用
  plugin:1.下载 2.引用 3.使用
*/
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({
    template:'./src/index.html'
  })],
  mode: 'development',
}
