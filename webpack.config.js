const webpack = require("webpack")
const path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pathsToClean = ["dist"]
const cleanOptions = {}

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    publicPath: '/assets/',
    filename: process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js'
  },
  module: {
    rules: [
      // custom javascripts
      {
        test: /\.js$/,
        use: ["babel-loader", "haml-jsx-loader"],
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
      },
      // custom stylesheets
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
      },

      // font-awesome
      // {
      //   test: /(font-awesome)+.scss?$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      
      //** foundation; should not be using foundation js
      // {
      //   test: /(foundation)+.*\.js$/,
      //   use: "babel-loader",
      //   exclude: path.join(__dirname, "src"),
      //   include: /node_modules/,
      // },
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      inject: true,
      template: process.env.NODE_ENV === 'production' ? "./src/index.production.html" : "./src/index.html"
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  },
  
  resolve: {
    alias: {
      _components: path.resolve(__dirname, "src/components/"),
      _containers: path.resolve(__dirname, "src/containers/"),
      _src: path.resolve(__dirname, "src/"),
      _images: path.resolve(__dirname, "src/images/"),
      _stylesheets: path.resolve(__dirname, "src/stylesheets/"),
      _utils: path.resolve(__dirname, "src/utils/"),
      _actions: path.resolve(__dirname, "src/actions/"),
      _reducers: path.resolve(__dirname, "src/reducers/"),
    }
  },
};
