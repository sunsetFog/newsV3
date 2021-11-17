/**
 * @description 项目工程配置
 */
const path = require('path')
console.log('config.js process.env.VUE_APP_API_HOST=', process.env.VUE_APP_API_HOST)
console.log('config.js process.env.VUE_APP_RUN_FLAG=', process.env.VUE_APP_RUN_FLAG)
console.log('process.env.NODE_ENV=', process.env.NODE_ENV)
console.log('process.env.VUE_APP_VCONSOLE=', process.env.VUE_APP_VCONSOLE)
console.log('typeof process.env.VUE_APP_VCONSOLE=', typeof process.env.VUE_APP_VCONSOLE)

module.exports = {
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

  // 直接修改webpack配置，不推荐
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
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
