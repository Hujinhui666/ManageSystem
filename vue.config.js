const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  // 服务器代理
  devServer:{
    proxy:{
      // '/api'为地址前缀看是否开启代理
      '/api':{
        target:'http://yapi.dapengjiaoyu.com',
        pathRewrite:{'^/api':''}, 
        secure: true, //如果是 https 加入这句
        ws: true, // 用于支持websocket
        changeOrigin: true //是否开启跨越
      }
    }
  }
})
