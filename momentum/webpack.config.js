const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    filename: "./src/app.js",
  },
  output: {
    filename: "./dist/bundle.js",
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
};
