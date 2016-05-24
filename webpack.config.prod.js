var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var webpack_isomorphic_tools_plugin = 
    new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-config'));

module.exports = {
  entry: './src/index',
  
  output: {
        path: path.join(__dirname, 'assets'),
        filename: './js/bundle.min.js?[hash]',
        publicPath: './'
  },
  
  plugins: [
        webpack_isomorphic_tools_plugin,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("css/bundle.min.css?[hash]")
  ],
  
  module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        
        {
            test: webpack_isomorphic_tools_plugin.regular_expression('style_modules'),
            loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader')
        },
        
        {
            test: webpack_isomorphic_tools_plugin.regular_expression('images'),
            loader: 'file-loader?name=img/prod/[name].[ext]?[hash]'
        }
    ]
  }
};