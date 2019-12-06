const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => ({
  entry: (argv.mode === 'development')  ? './example/index.js' : './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    liveReload: true,
    port: 8050
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({   
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ],
  output: {
    libraryTarget: 'umd',
    library: 'poor-man-ui-framework',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});