const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
require("regenerator-runtime");

module.exports = (_, argv) => ({
  entry: ["regenerator-runtime", "./src/index.js"],
  externals: {
    vue: "vue"
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
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  devtool: "eval",
  plugins: [new VueLoaderPlugin()],
  output: {
    libraryTarget: "umd",
    library: "mvi.vue",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
});
