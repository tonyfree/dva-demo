const path = require('path')
const resolve = path.resolve
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const theme = require('./theme.config.js')

module.exports = function override(config, env) {
  //路径别名
  config.resolve = {
    alias: {
      '~themes': resolve(__dirname, './src/themes'),
      '~components': resolve(__dirname,"./src/components"),
      '~pages': resolve(__dirname,"./src/pages"),
      '~layouts': resolve(__dirname,"./src/layouts"),
      '~utils': resolve(__dirname,"./src/utils"),
      '~config': resolve(__dirname,"./src/utils/config"),
      '~enums': resolve(__dirname,"./src/utils/enums"),
      '~services': resolve(__dirname,"./src/services"),
      '~models': resolve(__dirname,"./src/models"),
      '~routes': resolve(__dirname,"./src/routes"),
    }
  }

  // antd按需加载
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  )

  // antd主题配置
  config = rewireLess.withLoaderOptions({
    // modifyVars: { "@primary-color": "#1DA57A" },
    modifyVars: theme(),
    javascriptEnabled: true,
  })(config, env)

  return config;
}