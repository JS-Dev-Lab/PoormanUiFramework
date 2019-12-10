const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
require("regenerator-runtime");

const ports = {
  react: 3000,
  pm: 8050,
  svelte: 5000,
  vue: 9000,
  universal: 2500
};

module.exports = (_, argv) => ({
  entry: ["regenerator-runtime", (argv.mode === 'development') ? `./${argv.app}-example/main.js` : './src/index.js'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    liveReload: true,
    port: ports[argv.app]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./public/${argv.app}/index.html`
    }),
    new VueLoaderPlugin()
  ],
  output: {
    libraryTarget: 'umd',
    library: 'poor-man-ui-framework',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
});