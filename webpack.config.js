const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './public/src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)/],
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
  plugins: [ ],
  resolve: {
    modules: ['node_modules', 'src'],
      extensions: [".webpack.js", ".web.js", ".js", '.scss']
  },
  devServer: {
    hot: true,
    contentBase: '.'
  }
};
