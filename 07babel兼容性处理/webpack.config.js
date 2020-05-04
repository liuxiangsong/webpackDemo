/*
  1、运行项目指令：
  - webpack：会将打包结果输出。
  - npx webpack-dev-server：只会在内存中编译打包，没有输出。
  2、webpack的五个核心概念：
    - entry：指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。
    - output：指示webpack打包后的资源bundles输出到哪里，以及如何命名。
    - loader：指示webpack如何去处理非js和json文件（webpack自身只能处理js和json文件）
    - plugins：用于执行范围更广的任务。插件的范围包括从打包优化和压缩，到时重新定义环境中的变量等。
    - mode：指示webpack使用相应模式的配置（development、production）
  3、loader：是先下载安装，然后使用；plugin:是先下载安装，然后引用后，才能使用。
  4、HtmlWebpackPlugin插件:创建html及压缩html代码。（安装html-webpack-plugin）
  5、MiniCssExtractPlugin插件:把css提取成单独文件。（安装mini-css-extract-plugin）
  6、OptimizeCssAssetsWebpackPlugin插件：压缩css。（安装optimize-css-assets-webpack-plugin）
  7、css兼容性处理使用postcss-loader，兼容性配置写在package.json里的browserslist中，
     如果需使用其开发环境配置，则设置node环境变量process.env.NODE_ENV='development'
  8、Eslint:
    - 需安装eslint-loader、eslint。
    - airbnb检查规则，需安装eslint-config-airbnb-base、eslint-plugin-import。
    - 在package.json中eslintConfig中配置为使用airbnb规则。
  9、 Babel:js兼容性处理（需安装babel-loader、@babel/core、@babel/preset-env、core-js）
    - 预设@babel/preset-env只能转化基本语法，如promise等高级语法不能转换；
    - core-js处理较高级的语法转换。（可根据需要做相应配置处理兼容性语法转换）
    - 处理全部js兼容性使用@babel/polyfill,@babel/polyfill不需要在webpack中配置，直接在项目中引入（需安装@babel/polyfill）；
      * 问题：我们只要解决部分兼容性问题，但@babel/polyfill会将所有兼容性代码全部引入，生成的js文件体积太大。

*/
const { resolve } = require('path');
// 生成html页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css成单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置node环境变量,决定使用browserlist的哪个环境。
process.env.NODE_ENV = 'development';

// 复用css loader
const commonCssLoader = [
  // //创建style标签，并插入html中
  // 'style-loader',
  // 该loader取代style-loader，用于提取css成单独文件
  MiniCssExtractPlugin.loader,
  // 将css文件整合到js文件中
  'css-loader',
  /*
      css兼容性处理：postcss,需安装 postcss-loader、postcss-preset-env
      - postcss-preset-env 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式:
      - 默认使用package.json中browserslist的生产环境配置
      - 如果修改使用开发环境配置，则设置node环境变量process.env.NODE_ENV='development'
  */
  // 如果需修改loader的默认配置，则要写成对象
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()],
    },
  },
];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    // 打包输出根目录
    path: resolve(__dirname, 'dist'),
  },
  module: {
    // loader的配置
    rules: [
      // 处理js资源
      /*
        当一个文件要被多个loader处理时，需要注意loader的执行先后顺序，默认是从上往下，从右往左
        如：js文件同时要用eslint-loader和babel-loader处理时，eslint-loader要写在上面，或者在eslint-loader中配置enforce:'pre'（指示优先执行）
       */
      {
        test: /\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel如何处理兼容性
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3,
                },
                // 指定兼容性至浏览器的哪个版本
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
        },
      },
      {
        /*
          eslint语法检查：需安装eslint-loader、eslint
          检查规则使用airbnb：需要安装eslint-config-airbnb-base、eslint-plugin-import
        */
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true, // 自动修复eslint的错误
        },
      },
      // 处理css资源
      {
        test: /\.css$/,
        use: [...commonCssLoader],
      },
      // 处理scss资源
      {
        // 需安装node-sass、sass-loader
        test: /\.scss$/,
        use: [...commonCssLoader, 'sass-loader'],
      },
      // 处理图片资源
      {
        // 处理图片资源（默认处理不了html中img图片）
        // 需安装file-loader、url-loader
        test: /\.(jpg|png|gif)$/,
        // 要使用多个loader处理时用use;只使用一个loader时，用loader
        // 处理样式中的url图片资源
        loader: 'url-loader',
        options: {
          // 图片大小小于7kb时，转化为base64(优点：减少请求，缺点：转化为base64后，图片文件大小会更大)
          // Type: Boolean|Number|String
          limit: 7 * 1024,
          // url-loader默认使用es6模块解析，而html-loader引入图片是commonjs，解析时会解析成[object Module]
          // 解决方法：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 命名规则：[hash:10]取图片hash名的前10位;[ext]原文件扩展名
          name: '[hash:10].[ext]',
          // 文件输出存放目录
          outputPath: 'imgs',
        },
      },
      // 处理html文件中的img图片
      {
        test: /\.html$/,
        // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader',
      },
      // 处理其它资源
      {
        // 排除指定资源外，其它资源使用file-loader处理
        exclude: /\.(css|scss|js|json|html|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    // 需安装html-webpack-plugin
    new HtmlWebpackPlugin({
      // 生成html使用的模板
      template: './src/index.html',
      // 压缩html代码
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // 需安装mini-css-extract-plugin,其次替换style-loader
    // 用于提取css成单独文件
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/main.css',
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'development',
  // 需安装webpack-dev-server（启动devServer指令：npx webpack-dev-server)
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    port: 8087,
    // 自动打开浏览器
    open: true,
  },
};
