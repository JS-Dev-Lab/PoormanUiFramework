const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
require("regenerator-runtime");

module.exports = (_, argv) => ({
  entry: ["regenerator-runtime", "./main.js"],
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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    liveReload: true,
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.Framework": JSON.stringify(argv.app || argv.default)
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ],
  output: {
    libraryTarget: "umd",
    library: "mvi.examples",
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});
