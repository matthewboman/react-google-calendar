const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
const APP_DIR = path.resolve(__dirname, 'src/app/js')
const BUILD_DIR = path.resolve(__dirname, 'src/public')

module.exports = {
  context: __dirname,
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js',
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)/],
        include: APP_DIR,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-2', 'react'] }
        }],
      },
      {
        test: /\.scss$/,
        exclude: [/(node_modules|bower_components)/],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[folder]_[name]__[local]--[hash:base64:6]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('autoprefixer')()
                ];
              },
              sourceMap: true
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('./', 'index.html'),
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
      extensions: [".webpack.js", ".web.js", ".js", '.scss']
  },
  devServer: {
    // hot: true,
    contentBase: 'src/public'
  }
};
