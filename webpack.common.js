const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");

module.exports = {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
    // filename: "[name].[contenthash].js",
  },
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
      // chunksSortMode: 'none'
      template: `./src/pages/maradona/maradona.html`,
      filename: `maradona.html`,
      inject: true,
      cache: false,
    }),
    new HtmlWebpackTagsPlugin({
      files: ["./src/pages/maradona/maradona.html"],
      tags: [
        "./src/lib/jQuery-3.3.1.js",
        "./src/lib/p5.js",
        "./src/lib/p5.dom.js",
        "./src/lib/p5.sound.js",
        "./src/pages/maradona/sketch.js",
      ],
      append: true,
    }),
    // this plugin inject the correct assets as script tags in the html file otherwise the assets are not found
    new HtmlWebpackDeployPlugin({
      files: ["maradona.html"],
      assets: {
        copy: [
          {
            from: "./src/lib/jQuery-3.3.1.js",
            to: "./lib",
          },
          {
            from: "./src/lib/p5.js",
            to: "./lib",
          },
          {
            from: "./src/lib/p5.dom.js",
            to: "./lib",
          },
          {
            from: "./src/lib/p5.sound.js",
            to: "./lib",
          },
          {
            from: "./src/pages/maradona/sketch.js",
            to: "./lib",
          },
        ],
        scripts: [
          {
            path: "lib/jQuery-3.3.1.js",
          },
          {
            path: "lib/p5.js",
          },
          {
            path: "lib/p5.dom.js",
          },
          {
            path: "lib/p5.sound.js",
          },
          {
            path: "lib/sketch.js",
          },
        ],
      },
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
  entry: {
    index: "./src/index.js",
    maradona: "./src/pages/maradona/maradona.js",
    dibuja: "./src/pages/dibuja/dibuja.js",
    screenshots: "./src/pages/screenshots/screenshots.js",
    voca: "./src/pages/voca/voca.js",
    compraventa: "./src/pages/compraventa/compraventa.js",
    zarandraca: "./src/pages/zarandraca/zarandraca.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
