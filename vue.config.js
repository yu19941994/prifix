module.exports = {
  publicPath: '/prifix/'
}

css: {
  loaderOptions: {
    sass: {
      data: "@import '@/assets/function.scss';"
    }
  }
}
