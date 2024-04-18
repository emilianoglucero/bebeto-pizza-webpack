const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// const mainHtmlPage = [
//   new HtmlWebpackPlugin({
//     template: "./src/index.html",
//     filename: "index.html",
//     chunks: ["index"],
//   }),
// ];

// const htmlPluginEntries = mainHtmlPage.concat(
//   pages.map(
//     (page) =>
//       new HtmlWebpackPlugin({
//         template: `./src/pages/${page}/${page}.html`,
//         filename: `${page}.html`,
//         chunks: [page],
//       })
//   )
// );

// const pages = ["maradona", "dibuja"];
module.exports = {
  // target: "web",
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/pages/screenshots/img", to: "img/screenshots" },
        { from: "src/pages/maradona/assets", to: "maradona/assets" },
        { from: "src/pages/compraventa/static/media", to: "static/media" },
        { from: "src/pages/zarandraca/assets", to: "zarandraca/assets" },
        {
          from: "src/pages/dibuja/assets",
          to: "dibuja/assets",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      filename: `index.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/maradona/maradona.html`,
      filename: `maradona.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/dibuja/dibuja.html`,
      filename: `dibuja.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/voca/voca.html`,
      filename: `voca.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/zarandraca/zarandraca.html`,
      filename: `zarandraca.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/screenshots/screenshots.html`,
      filename: `screenshots.html`,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/compraventa/compraventa.html`,
      filename: `compraventa.html`,
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp3$/i,
        type: "asset/resource",
      },
    ],
  },
  // Spin up a server for quick development
  devServer: {
    // watchFiles: ["src/*.html", "src/*/*/*.html"],
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    open: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: "/node_modules/",
  },
  entry: {
    index: "./src/index.js",
    maradona: "./src/pages/maradona/maradona.js",
    dibuja: "./src/pages/dibuja/dibuja.js",
    screenshots: "./src/pages/screenshots/screenshots.js",
    voca: "./src/pages/voca/voca.js",
    compravena: "./src/pages/compraventa/compraventa.js",
    zarandraca: "./src/pages/zarandraca/zarandraca.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
