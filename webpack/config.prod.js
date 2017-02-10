var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var config = require('../config');

module.exports = {
	context: config.webpackContextPath,

	entry: './src/entry/index',

	output: {
		path: config.webpackClientBuildDirPath,
		filename: 'bundle-build.js?[hash]',
		publicPath: config.webpackPublicPath
  },

	plugins: [
		new ExtractTextPlugin('bundle-build.css?[hash]'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: { warnings: false },
			output: { comments: require('uglify-save-license') }
    }),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			canPrint: true
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
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader!sass-loader')
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
	},

	postcss: function() {
    return [
      require('autoprefixer')
    ];
  }
};
