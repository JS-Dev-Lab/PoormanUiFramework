const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ports = {
  react: 3000,
  pm: 8050,
  svelte: 5000
};

module.exports = (_, argv) => ({
  entry: (argv.mode === 'development') ? `./${argv.app}-example/index.js` : './src/index.js',
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
    })
  ],
  output: {
    libraryTarget: 'umd',
    library: 'poor-man-ui-framework',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
});