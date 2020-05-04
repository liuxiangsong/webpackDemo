/**
 * 使用dll技术，对某些库（第三方库，如jquery、vue、react……）进行单独打包
 * 运行webpack时，默认查找的是webpack.config.js配置文件。
 * 现在需要运行webpack.dll.js配置文件时，需要指定配置文件名去进行打包：'webpack --config webpack.dll.config.js’
 * 此列中：entry和output的配置是将jquery打包成一个文件，plugins是为了生成manifest.json文件,在该文件中映射了与jquery的关系。
*/
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: {
    // 键：最终打包生成的[name],此列中即vendors
    // 值：要打包的库，数组类型，表示可以将多个三方库打包在一起输出，此列中仅juqery
    vendors: ['jquery'],
  },
  output: {
    // [name]对应入口中的名称，此列中为vendors
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    // 打包的库里面向外暴露出去的内容叫什么名字，如此列为juqery_hash值
    library: '[name]_[hash]',
  },
  plugins: [
    // 打包生成一个manifest.json文件，此列中提供和jquery的映射
    new webpack.DllPlugin({
      // 映射库暴露的内容名称，对应output中library的名称
      name: '[name]_[hash]',
      // 输出文件路径
      path: resolve(__dirname, 'dll/manifest.json'),
    }),
  ],
  mode: 'production',
};
