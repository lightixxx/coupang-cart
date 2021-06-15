const mode = process.env.NODE_ENV === "production" ? "production" : "development"
const isProduction = mode === "production"
const watch = mode !== "production"
module.exports = {
  mode,
  watch,
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader"
    }]
  },
  devtool: isProduction ? false : "eval-source-map",
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}