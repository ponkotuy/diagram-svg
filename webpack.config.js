module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
    csv2json: "./src/csv2json.ts",
    menu: "./src/menu.ts",
    tests: "./src/tests.ts"
  },
  output: {
    filename: '[name].js',
    clean: true
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
    extensions: [".ts", ".js"]
  }
};
