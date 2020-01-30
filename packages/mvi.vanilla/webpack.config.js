const path = require("path");

module.exports = () => ({
  entry: ["./src/index.js"],
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
            }]]
          }
        }
      }
    ]
  },
  mode: 'production',
  output: {
    libraryTarget: "umd",
    library: "mvi.vanilla",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
});
