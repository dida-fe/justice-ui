const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'justiceui-docs': './docs/src/index.js',
    'justiceui-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    clientLogLevel: 'warning'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.css']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader']
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['justiceui-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['justiceui-mobile'],
      template: 'docs/src/index.tpl',
      filename: 'mobile.html',
      inject: true
    })
  ]
};
