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
  3、loader和plugins的使用：loader是先下载安装，然后使用；plugin是先下载安装，然后引用后，才能使用。
  4、plugins（插件）：
    - HtmlWebpackPlugin:创建html及压缩html代码。（安装html-webpack-plugin）
    - MiniCssExtractPlugin:把css提取成单独文件。（安装mini-css-extract-plugin）
    - OptimizeCssAssetsWebpackPlugin：压缩css。（安装optimize-css-assets-webpack-plugin）
    - CleanWebpackPlugin:构建前清除打包输出文件目录下的所有文件。（安装clean-webpack-plugin）
  7、css兼容性处理使用postcss-loader，兼容性配置写在package.json里的browserslist中，
     如果需使用其开发环境配置，则设置node环境变量process.env.NODE_ENV='development'
  8、Eslint:
    - 需安装eslint-loader、eslint。
    - airbnb检查规则，需安装eslint-config-airbnb-base、eslint-plugin-import。
    - 在package.json中eslintConfig中配置为使用airbnb规则。
  9、Babel:js兼容性处理（需安装babel-loader、@babel/core、@babel/preset-env、core-js）
    - 预设@babel/preset-env只能转化基本语法，如promise等高级语法不能转换；
    - core-js处理较高级的语法转换。（可根据需要做相应配置处理兼容性语法转换）
    - 处理全部js兼容性使用@babel/polyfill,@babel/polyfill不需要在webpack中配置，直接在js文件中引入（需安装@babel/polyfill）；
      * 问题：我们只要解决部分兼容性问题，但@babel/polyfill会将所有兼容性代码全部引入，生成的js文件体积太大。
  10、性能优化
    - 热模块替换（HMR）
      - 作用：一个模块发生变化，只会重新打包这一个模块,而不是打包所有模块，以提高构建速度；
      - 通过设置devServer中的hot:true来启用HRM；启用HMR后：
        - 样式文件：在处理css的loader中，使用style-loader，即可使用HMR功能。
        - js文件：默认不支持HMR功能，需要修改js代码以支持HMR功能。
          - HMR功能对js的处理，只能处理非入口js文件。
          - 在入口js文件中，通过使用module.hot.accept来接受给定依赖模块的更新
          - eg: if (module.hot) {
                  module.hot.accept('./print.js', () => {
                    print();
                  });
                }
        - html文件：会导致html文件不能热更新了；解决方法：将html文件添加到entry入口。
    - devtool: 'source-map': 提供源代码到构建后代码映射关系。
      - 可选值：[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
        - inline-source-map:内联; 映射关系保存在打包文件末尾。
        - eval-source-map:内联; 映射关系保存在每个文件后。
        - hidden-source-map:外部; 代码报错时，不能追踪到源代码的错误位置，只能追踪到构建后代码的错误位置。
        - 内联和外部的区别：外部会生成单独的映射文件，内联则把映射关系保存在打包后的文件中(文件大小会变大）。
        - 内联构建速度更快：构建速度eval>inline>cheap>...
        - 开发环境：从构建速度及调试友好的方面考虑，用eval-source-map。
        - 生产环境：从隐藏源代码（调试友好）方面考虑，用nosources-source-map或hidden-source-map。
    - oneOf:提升构建速度
      - oneOf内的loader只会匹配一个，所以oneOf内不能配置两个或以上的loader去处理同一种类型的文件。
      - 如果需要多个loader去处理同一种类型的文件，则将多余的放在oneOf之外。
    - 缓存：
      - babel缓存（优化打包构建速度）：在babel-loader选项中，设置cacheDirectory:true，来启用babel缓存。
      - 文件资源缓存（优化线上代码）：打包生成的文件名中加入hash值。
        - hash类型：
          - hash:webpack构建时会生成唯一的hash值。
            - 问题：重新打包时，则css、js的文件名都会变更，从而会导致缓存失效。
          - chunkhash:根据chunk生成的hash值；如果打包来源于同一个chunk,那么chunkhash值就一样。
            - 问题：同hash一样，js和css的hash值一样，因为css是在js中被引入的，所以它们属于同一个chunk。
          - contenthash:根据文件内容生成的hash值；不同文件hash值一定不一样。
        - 提示不能使用chunkhash或contenthash值时，请关闭HMR。
    - tree shaking:去除打包生成文件中无用的代码，以减少生成文件的大小。
      - 生效前提：1、开启production环境；2、必须使用ES6模块化。
      - 在package.json中配置"sideEffects": false时，表示所有代码都没副作用，都可以进行tree shaking。
        - "sideEffects": false时，可能会把css、@babel/polyfill文件干掉。
        - 配置成"sideEffects":["*.css","*.scss"]，指示css、scss文件不进行tree shaking。
    - 懒加载、预加载：
      - 在使用时才去引用相应js文件，如：import('./test.js').then(({add})=>{console.log(add(2,4);)})
      - 在引入相应js文件时，通过注释webpackPrefetch:true来设置该js文件为预加载文件。
    - code split代码分割，在optimization中配置。
      - 异步代码（import)不需配置，webpack会自动进行代码分割。
    - PWA：渐近式网络开发应用程序（离线可访问）(安装workbox-webpack-plugin)
    - 多进程打包thread-loader(安装thread-loader)
      - 进程启动大概为600ms，进程通信也有开销。
      - 只有工作消耗时间比较长，才需要多进程打包。（所以如babel-loader、eslint消耗时间长的才考虑使用多进程打包）
      - 默认起用进程数量为电脑核数减1，也可通过配置指定。
      - 要对某个loader使用thread-loader，则要把thread-loader写在相应loader的前面。
    - externals和dll
*/

const webpack = require('webpack');
const { resolve } = require('path');
// 生成html页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css成单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 构建前清除dist目录中的内容
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// 设置node环境变量,决定使用browserlist的哪个环境。
process.env.NODE_ENV = 'development';

// 复用css loader
const commonCssLoader = [
  // //创建style标签，并插入html中
  // 'style-loader',
  // // 该loader取代style-loader，用于提取css成单独文件
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
  // 启用HMR后，需将html文件添加到entry里，否则html文件不能热更新
  entry: ['./src/js/index.js', './src/index.html'], // './src/index.js'
  output: {
    // 多入口时，文件名可以用[name]来对应入口文件名，eg:filename:'js/[name].[contenthash:10].js'
    filename: 'js/build.[contenthash:10].js',
    // 打包输出根目录
    path: resolve(__dirname, 'dist'),
  },
  module: {
    // loader的配置
    rules: [
      // 处理js资源
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
      {
        // oneOf内的loader只会匹配一个，所以oneOf内不能配置两个或以上的loader去处理同一种类型的文件。
        oneOf: [
          /*
        当一个文件要被多个loader处理时，需要注意loader的执行先后顺序，默认是从上往下，从右往左
        如：js文件同时要用eslint-loader和babel-loader处理时，eslint-loader要写在上面，或者在eslint-loader中配置enforce:'pre'（指示优先执行）
       */
          {
            test: /\.js$/,
            // 排除node_modules下的js文件
            exclude: /node_modules/,
            use: [
              // 开启多进程打包 ，thread-loader必须放在相应loader的前面。
              // 如不需修改进程配置选项，可直接写成'thread-loader',不需写成对象
              {
                loader: 'thread-loader',
                options: {
                  workers: 2, // 进程2个
                },
              },
              {
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
                  // 开启babel缓存
                  cacheDirectory: true,
                },
              },
            ],

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
    ],
  },
  plugins: [
    // 需安装html-webpack-plugin
    new HtmlWebpackPlugin({
      // 生成html使用的模板
      template: './src/index.html',
      // // 压缩html代码
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      // },
    }),
    // 需安装mini-css-extract-plugin,其次替换style-loader
    // 用于提取css成单独文件
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/main.[contenthash:10].css',
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    // 清除打包输出文件目录下的所有文件
    new CleanWebpackPlugin(),
    // 生成一个serviceWorker配置文件
    new WorkboxWebpackPlugin.GenerateSW({
      /**
       * 1、帮助serviceWorker快速启动
       * 2、删除旧的serviceWorker
       */
      clientsClaim: true,
      skipWaiting: true,
    }),
    // 告诉webpack哪些库不参与打包，
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json'),
    }),
    // 将filepath中指定的文件复制到webpack输出根目录，并在html中添加对该文件的引用
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/vendors.js'),
    }),
  ],
  /**
   * 1、可以将node_modules中的代码单独打包一个chunk最终输出
   * 2、自动分析多入口chunk中，有没有超出一定大小的公共文件，如果有，则会把打包成单独的一个chunk.
   */
  optimization: {
    splitChunks: {
      // all表示同步和异步代码都进行代码分割，默认值为async
      chunks: 'all',
    },
  },
  mode: 'development', // development 、 production
  // 需安装webpack-dev-server（启动devServer指令：npx webpack-dev-server)
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    port: 8087,
    // 自动打开浏览器
    open: true,
    // 开启HMR
    hot: true,
  },
  devtool: 'eval-source-map', // 'eval-source-map'
  // // 排除对某些包进行打包
  // externals: {
  //   // 忽略库名：npm包名
  //   jquery: 'jQuery',
  // },
};
