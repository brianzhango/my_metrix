const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"),
  favicon: "./public/favicon.ico",
  filename: "index.html",
  manifest: "./public/manifest.json",
})],
test: /\.svg$/,
use: [
  {
    loader: 'svg-url-loader',
    options: {
      limit: 10000,
    },
  },
],
};
