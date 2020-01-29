module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
    csv2json: "./src/csv2json.ts",
    menu: "./src/menu.ts"
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      'vue$': 'vue/dist/vue.esm.browser.min.js'
    }
  }
};
