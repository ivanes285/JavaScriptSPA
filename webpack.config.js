const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = {
  entry: {
    app: "./src/app.js",
  },

  devServer: {
    port: 4000,
    open: true,
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

plugins:[
  new HtmlWebpackPlugin({
      template: "./src/index.html",
  }),

  new MiniCssExtractPlugin({
    filename: "css/bundle.css"
  })
]

};
