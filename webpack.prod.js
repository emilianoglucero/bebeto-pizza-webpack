const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // target: "web",
  mode: "production",
  devtool: "source-map",
});
