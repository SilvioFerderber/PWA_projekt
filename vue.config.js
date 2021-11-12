const path = require('path')
const globImporter = require('node-sass-glob-importer')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/styles/*.scss'),
      ]
    }
  },

  configureWebpack: config => {
    config.module.rules.push({
      test: /\.scss$/,
      loader: 'sass-loader',
      options: {
        sassOptions: {
          importer: globImporter()
        }
      }
    })
  }
}