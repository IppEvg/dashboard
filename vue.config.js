const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dashboard/' : '/',
    outputDir: 'dist',
    css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/vars.scss";`
      }
    }
  }

})
