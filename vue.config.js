/**
 * @description vue-cli3主配置
 * 官网：https://cli.vuejs.org/zh/config/#vue-config-js
 */
const path = require('path')

function curPath (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  configureWebpack: {
    devtool: 'source-map', // 断点调试
    resolve: {
      alias: {
        '@': curPath('src')
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/components/activity/editor/css/variable.scss";`, //这儿的键名改了
  //     }
  //   }
  // },
  // 部署应用包时的基本 URL，资源引用路径（相对于index.html）
  // 开发环境为绝对路径
  // 部署环境为相对路径
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  productionSourceMap: false,

  // 链式修改webpack配置，表达能力更强，也更为安全
  chainWebpack: config => {
    config
      // html-webpack-plugin
      .plugin('html')
      .tap(args => {
        args[0].minify = Object.assign((args[0].minify || {}), {
          removeAttributeQuotes: false, // 显示属性引号
          quoteCharacter: '"' // 引号为"
        })
        return args
      })
  },



  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/style/whole.scss')
      ]
    }
  },

  // 请求代理
  devServer: {
    proxy: {
      '/mti': {
        target: process.env.VUE_APP_RUN_FLAG === 'local-test'
        ? 'https://dctest.mideadc.com/mas-api/restful/'
        : 'https://dc.mideadc.com/mas-api/restful/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
