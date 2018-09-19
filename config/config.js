module.exports = {
  dev: {
    proxyTable: {
      '/api': {
        target: 'http://localhost:3001',        // 接口的域名
        // secure: false,                       // 如果是https接口，值为true
        changeOrigin: true,                     // 如果接口跨域，值为true
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
  },
  build: {
    productionSourceMap: false,     // 打包后的文件，是否生成map文件    生产环境为true  
    productionGzip: false,          // 打包后的文件，是否采用gzip格式   生产环境为?   
  },
}


