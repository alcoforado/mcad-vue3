module.exports = {
  css: {
    sourceMap: true,
    loaderOptions:{
      sass: {
        prependData:`@import "@/scss/theming.scss";`
      }
    }
  }
}