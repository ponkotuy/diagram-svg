module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
    csv2json: "./src/csv2json.ts"
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  }
};
