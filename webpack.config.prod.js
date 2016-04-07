var path = require('path');
var webpack = require('webpack');

var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var webpack_isomorphic_tools_plugin = 
    new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-config'));

module.exports = {
  entry: './src/index',
  
  output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.min.js?[hash]',
        publicPath: './'
  },
  
  plugins: [
        webpack_isomorphic_tools_plugin,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
  ],
  
  module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        
        /*{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader')
        },*/
        
        {
            test: webpack_isomorphic_tools_plugin.regular_expression('images'),
            loader: 'file-loader?name=img/prod/[name].[ext]?[hash]'
        }
    ]
  }
};