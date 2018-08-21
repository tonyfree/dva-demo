const path = require('path')
const resolve = path.resolve
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    alias: {
      '@themes': resolve(__dirname, './src/themes'),
      '@components': resolve(__dirname,"./src/components"),
      '@utils': resolve(__dirname,"./src/utils"),
      '@config': resolve(__dirname,"./src/utils/config"),
      '@enums': resolve(__dirname,"./src/utils/enums"),
      '@services': resolve(__dirname,"./src/services"),
      '@models': resolve(__dirname,"./src/models"),
      '@routes': resolve(__dirname,"./src/routes"),
    }
  }

  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  )

  return config;
}