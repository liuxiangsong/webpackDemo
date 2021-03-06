/*
  运行项目指令：
  - webpack：会将打包结果输出。
  - npx webpack-dev-server：只会在内存中编译打包，没有输出。
*/ 
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/*
  loader:1.下载 2.使用
  plugin:1.下载 2.引用 3.使用
*/
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    //loader的配置
    rules: [
      //处理css资源
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //处理scss资源
      {
        //需安装node-sass、sass-loader
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      //处理图片资源
      {
        //处理图片资源（默认处理不了html中img图片
        //需安装file-loader、url-loader
        test: /\.(jpg|png|gif)$/,
        //要使用多个loader处理时用use;只使用一个loader时，用loader
        //处理样式中的url图片资源
        loader: 'url-loader',
        options: {
          //图片大小小于7kb时，转化为base64(优点：减少请求，缺点：转化为base64后，图片文件大小会更大)
          //Type: Boolean|Number|String
          limit: 7 * 1024,
          //url-loader默认使用es6模块解析，而html-loader引入图片是commonjs，解析时会解析成[object Module]
          //解决方法：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          //命名规则：[hash:10]取图片hash名的前10位;[ext]原文件扩展名
          name: '[hash:10].[ext]',
        },
      },
      //处理html文件中的img图片
      {
        test: /\.html$/,
        //处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader',
      },
      //处理其它资源
      {
        //排除指定资源外，其它资源使用file-loader处理
        exclude:/\.(css|scss|js|json|html|jpg|png|gif)$/,
        loader:'file-loader',
        options:{
          name: '[hash:10].[ext]',
        }
      }
    ],
  },
  plugins: [
    //需安装html-webpack-plugin
    new HtmlWebpackPlugin({
      //生成html使用的模板
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  //需安装webpack-dev-server（启动devServer指令：npx webpack-dev-server)
  devServer:{
    //项目构建后路径
    contentBase:resolve(__dirname,'dist'),
    //启动gzip压缩
    compress:true,
    port:8087,
    //自动打开浏览器
    open:true
  }
}
