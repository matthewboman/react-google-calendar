const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require("webpack-merge")

const APP_DIR = path.resolve(__dirname, 'src/app/js')
const BUILD_DIR = path.resolve(__dirname, 'src/public')

module.exports = env => {
  const { PLATFORM, VERSION } = env

  return merge([
    {
      entry: [
        '@babel/polyfill', APP_DIR
      ],

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
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

        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: path.join('./', 'index.html'),
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
      ],
    }
  ])
}
