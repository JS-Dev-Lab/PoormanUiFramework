const path = require("path");
module.exports = () => ({
  entry: ["./src/index.js"],
  externals: {
    react: "react"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  devtool: "eval",
  output: {
    libraryTarget: "umd",
    library: "mvi.react",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
});
