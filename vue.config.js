module.exports = {
  publicPath: '/prifig/dist/'
}

css: {
  loaderOptions: {
    sass: {
      data: "@import '@/assets/function.scss';"
    }
  }
}