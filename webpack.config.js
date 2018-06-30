const path = require("path");
const webpack = require("webpack");

const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {"presets": ["@babel/preset-env"]}
  }
};

const rules = [babelLoader];

const config = {
  entry: "./app.js",
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
  },
  module: { rules }
};

module.exports = config;