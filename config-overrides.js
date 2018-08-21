// import { resolve } from 'path'
const path = require('path')
const resolve = path.resolve

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
  return config;
}