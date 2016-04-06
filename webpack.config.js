var path = require('path');
var webpack = require('webpack');
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
 
var webpack_isomorphic_tools_plugin = 
    new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-config'))
        .development();

module.exports = {
  entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/index'
  ],
  
  output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
  },
  
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        webpack_isomorphic_tools_plugin
  ],
  
  module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
        
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
            },
            
            {
                test: webpack_isomorphic_tools_plugin.regular_expression('images'),
                loader: 'file-loader'
            }
        ]
  }
};