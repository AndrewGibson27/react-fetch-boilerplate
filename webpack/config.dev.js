var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('../config');

module.exports = {
	context: config.webpackContextPath,

	entry: [
		'webpack-hot-middleware/client',
		'./src/entry/index'
	],

	output: {
		path: config.webpackClientBuildDirPath,
		filename: 'bundle-build.js',
		publicPath: config.webpackPublicPath
  },

	plugins: [
		new ExtractTextPlugin('bundle-build.css'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],

  module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},

			{
				test: /\.(scss|sass)$/,
				include: '/src/',
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass-loader'
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader?name=[name]-build.[ext]'
			},

			{
        test: /\.json$/,
        loader: 'json-loader'
      }
		]
	}
};
