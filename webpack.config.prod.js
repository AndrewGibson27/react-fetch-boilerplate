var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/entry/index',

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle-build.js?[hash]',
		publicPath: '/'
  },

	plugins: [
		new ExtractTextPlugin('bundle-build.css?[hash]'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
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
				include: path.join(__dirname, 'src'),
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader!sass-loader')
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader?name=[name]-build.[ext]'
			}
		]
	},

	postcss: function() {
    return [
      require('autoprefixer')
    ];
  }
};
