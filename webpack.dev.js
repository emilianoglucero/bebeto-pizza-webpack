const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // target: "web",
  mode: "development",
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    // watchFiles: ["src/*.html", "src/*/*/*.html"],
    static: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: "/node_modules/",
  },
});
