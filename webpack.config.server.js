// https://github.com/jarsbe/book-shelf/blob/isomorphic/webpack/server.config.js

var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/shared/routes',

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  plugins: [
    new ExtractTextPlugin('../public/bundle-build.css'),
  ],

  output: {
    path: path.join(__dirname, 'server'),
    filename: 'routes.js',
    publicPath: '/',
		libraryTarget: 'commonjs2'
  },

  node: {
    __filename: true,
    __dirname: true,
    console: true
  },

  module: {
    loaders: [
      {
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},

			{
				test: /\.(scss|sass)?$/,
				loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass-loader')
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader?name=[name]-build.[ext]'
			}
    ]
  }
};
