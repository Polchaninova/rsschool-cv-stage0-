const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    filename: "./src/app.js",
  },
  output: {
    filename: "bundle.js",
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "assets"),
        publicPath: "/assets",
      },
      {
        directory: path.join(__dirname, "css"),
        publicPath: "/css",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
        serveIndex: true,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
        { from: "css", to: "css" },
        { from: "public", to: "./" },
      ],
    }),
  ],
};
