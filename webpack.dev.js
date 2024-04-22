const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    // watchFiles: ["src/*.html", "src/*/*/*.html"],
    // open: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: "/node_modules/",
  },
});
