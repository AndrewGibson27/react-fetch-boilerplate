// https://github.com/jarsbe/book-shelf/blob/isomorphic/webpack/server.config.js

var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/routes.js',

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  output: {
    path: './server',
    filename: 'routes.js',
		libraryTarget: 'commonjs2'
  },

	plugins: [
		new ExtractTextPlugin('../public/css/bundle.css?[hash]')
	],

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
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass-loader')
			}
    ]
  }
};
