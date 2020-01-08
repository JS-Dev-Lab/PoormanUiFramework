const path = require("path");

module.exports = () => ({
  entry: ["./index.js"],
  externals: {
    "remotedev": "remotedev"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devtool: "eval",
  optimization: {
    minimize: true
  },
  output: {
    libraryTarget: "umd",
    library: "mvi.core",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
});
