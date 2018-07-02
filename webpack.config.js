const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = false;
const commonExcludes = /(node_modules)/;
const copyPatterns = [
  { from: 'public/libs', to: 'libs' },
  { from: 'src/old', to: 'old' }
];

const babelLoader = {
  test: /\.js$/,
  exclude: commonExcludes,
  use: {
    loader: "babel-loader",
    options: {
      "presets": [
        ["@babel/preset-env", {
          "targets": {
             "browsers": ["ie 9"]
            }
          }
        ]
      ],
      "plugins": [
        "transform-es2015-modules-amd"
      ]
    }
  }
};
const sassLoader = {
  test: /\.(s*)css$/,
  exclude: commonExcludes,
  use: [
    devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
    "css-loader", 
    "sass-loader"
  ]
};

const rules = [babelLoader, sassLoader];
const plugins = [
  new CleanWebpackPlugin(), 
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  }),
  new MiniCssExtractPlugin(),
  new CopyWebpackPlugin([ ...copyPatterns ])
];

const config = {
  mode: 'none',
  entry: "./app.js",
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
  },
  module: { rules },
  plugins
};

module.exports = config;