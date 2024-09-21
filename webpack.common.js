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
  resolve: {
    modules: ["node_modules"], // This tells webpack to look in node_modules for modules
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/pages/screenshots/assets",
          to: "screenshots/assets/img/screenshots",
        },
        { from: "src/pages/maradona/assets", to: "maradona/assets" },
        { from: "src/pages/compraventa/assets", to: "assets" },
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
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // chunksSortMode: 'none'
      template: `./src/pages/maradona/maradona.html`,
      filename: `maradona.html`,
      inject: true,
      chunks: ["maradona"],
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
            to: "./maradona/js",
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
            path: "maradona/js/sketch.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/dibuja/dibuja.html`,
      filename: `dibuja.html`,
      inject: true,
      chunks: ["dibuja"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["dibuja.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/dibuja/js/cursor-effect-dibuja.js",
            to: "dibuja/js",
          },
          {
            from: "./src/pages/dibuja/js/sketch.js",
            to: "dibuja/js",
          },
        ],
        scripts: [
          {
            path: "dibuja/js/cursor-effect-dibuja.js",
          },
          {
            path: "dibuja/js/sketch.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/voca/voca.html`,
      filename: `voca.html`,
      inject: true,
      chunks: ["voca"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["voca.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/voca/js/cursor-effect-abri.js",
            to: "voca/js",
          },
          {
            from: "./src/pages/voca/js/libs/utils.js",
            to: "voca/js",
          },
        ],
        scripts: [
          {
            path: "voca/js/cursor-effect-abri.js",
          },
          {
            path: "voca/js/utils.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/zarandraca/zarandraca.html`,
      filename: `zarandraca.html`,
      inject: true,
      chunks: ["zarandraca"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["zarandraca.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/zarandraca/phaser.js",
            to: "zarandraca/js",
          },
          {
            from: "./src/pages/zarandraca/main.js",
            to: "zarandraca/js",
          },
          {
            from: "./src/pages/zarandraca/jumble.js",
            to: "zarandraca/js",
          },
        ],
        scripts: [
          {
            path: "zarandraca/js/phaser.js",
          },
          {
            path: "zarandraca/js/main.js",
          },
          {
            path: "zarandraca/js/jumble.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/screenshots/screenshots.ejs`,
      filename: `screenshots.html`,
      inject: false,
      chunks: ["screenshots"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["screenshots.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/screenshots/js/main.js",
            to: "screenshots/js",
          },
        ],
        scripts: [
          {
            path: "screenshots/js/main.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/nuncasepuedehacermasrapido/nuncasepuedehacermasrapido.html`,
      filename: `nuncasepuedehacermasrapido.html`,
      inject: true,
      chunks: ["nuncasepuedehacermasrapido"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["nuncasepuedehacermasrapido.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/nuncasepuedehacermasrapido/static/js/453.2232a744.chunk.js",
            to: "nuncasepuedehacermasrapido/js",
          },
          {
            from: "./src/pages/nuncasepuedehacermasrapido/static/js/main.fc0ae0f3.js",
            to: "nuncasepuedehacermasrapido/js",
          },
        ],
        scripts: [
          {
            path: "nuncasepuedehacermasrapido/js/453.2232a744.chunk.js",
          },
          {
            path: "nuncasepuedehacermasrapido/js/main.fc0ae0f3.js",
          },
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/compraventa/compraventa.html`,
      filename: `compraventa.html`,
      inject: true,
      chunks: ["compraventa"],
    }),
    new HtmlWebpackDeployPlugin({
      files: ["compraventa.html"],
      assets: {
        copy: [
          {
            from: "./src/pages/compraventa/static/js/453.cba48af4.chunk.js",
            to: "compraventa/js",
          },
          {
            from: "./src/pages/compraventa/static/js/main.988f776f.js",
            to: "compraventa/js",
          },
        ],
        scripts: [
          {
            path: "compraventa/js/453.cba48af4.chunk.js",
          },
          {
            path: "compraventa/js/main.988f776f.js",
          },
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel for all .js files
        exclude: /node_modules/, // Don't use Babel for files in node_modules
        use: "babel-loader", // Use Babel
      },
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
    nuncasepuedehacermasrapido:
      "./src/pages/nuncasepuedehacermasrapido/nuncasepuedehacermasrapido.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
