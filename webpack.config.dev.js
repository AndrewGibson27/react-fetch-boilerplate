var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],

	output: {
		path: path.join(__dirname, 'public', 'js'),
		filename: 'bundle.js',
		publicPath: '/public/js/'
  },

	plugins: [
		new ExtractTextPlugin('../css/bundle.css?[hash]'),
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
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass-loader')
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	}
};
