// https://github.com/jarsbe/book-shelf/blob/isomorphic/webpack/server.config.js

var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

module.exports = {
  entry: './src/shared/routes',

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

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
				test: /\.(scss|sass|css)?$/,
				loader: 'null-loader'
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader?name=[name].[ext]'
			}
    ]
  }
};
