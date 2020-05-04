# webpack 性能优化

## 开发环境性能优化

- 优化打包构建速度

  - HMR 模块热替换

- 优化代码调试
  - source-map

## 生产环境性能优化

- 优化打包构建速度

  - oneOf
  - babel 缓存
  - 多进程打包
  - externals
  - dll

- 优化代码运行的性能

  - 文件缓存（hash、chunkhash、contenthash）
  - tree shaking （树摇）
  - code split（代码分隔）
    - 单入口项目：默认打包输出到一个文件。
      - 可以设置 optimization，会把引用 node_module 的文件单独打包输出。
      - 在 js 中引用其它 js 文件时，可以使用 import 语法引入。
    - 多入口。
      - 设置 optimization 会提取公共代码，以防止打包重复代码。
      - 也可用 import 语法。
  - 懒加载、预加载（预加载兼容性不好）
  - PWA
