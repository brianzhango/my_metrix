const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [HtmlWebpackPlugin ({
    favicon: "./public/favicon.ico",
    filename: "index.html",
    manifest: "./public/manifest.json"
})],
};
