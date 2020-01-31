const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
require("regenerator-runtime");

module.exports = (_, argv) => ({
  entry: {
    app: ["regenerator-runtime", "./main.js"],
    vendor: ['remotedev'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", {
              useBuiltIns: "entry",
              "modules": false
            }],
              "@babel/preset-react"]
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
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  }
});
