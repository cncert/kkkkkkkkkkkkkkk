'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    // 以下分为两次来构建，每次需要注释一个，并且本前端项目需要和后端项目在同一个目录下

    // index: path.resolve(__dirname, '../../daily_report/report/web/static/static/index.html'), // 生成主页的入口页面
    // assetsRoot: path.resolve(__dirname, '../../daily_report/report/web/static/static'),   // 存放主页文件的目录 
    // assetsSubDirectory: 'self-static',  // 主页文件的静态文件目录
    // assetsPublicPath: '../static/static/',  // 主页文件index.html中样式文件路径的前缀


    index: path.resolve(__dirname, '../../daily_report/report/web/static/static/search/search.html'), // 生成搜索页面的入口文件
    assetsRoot: path.resolve(__dirname, '../../daily_report/report/web/static/static/search/'),  // 存放搜索页面文件的目录 
    assetsSubDirectory: 'self-static',  // 搜索页面文件的静态文件目录
    assetsPublicPath: '../static/static/search/',   // 搜索页面search.html中样式文件路径的前缀

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
