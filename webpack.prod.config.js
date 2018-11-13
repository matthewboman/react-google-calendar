const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const prodConfig = env => {
  return merge([

  ])
}

module.exports = env => {
  return merge(baseConfig(env), prodConfig(env))
}
