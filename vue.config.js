module.exports = {
  publicPath: '/prifix/dist/'
}

css: {
  loaderOptions: {
    sass: {
      data: "@import '@/assets/function.scss';"
    }
  }
}