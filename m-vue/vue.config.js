const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: 'm-vue',
      libraryTarget: 'umd'
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
})
