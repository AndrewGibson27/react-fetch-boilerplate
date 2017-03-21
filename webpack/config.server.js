// https://github.com/jarsbe/book-shelf/blob/isomorphic/webpack/server.config.js
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '..'),

  entry: './shared/routes',

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  output: {
    path: path.join(__dirname, '..', 'server', 'dist'),
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
				test: /\.(scss|sass)$/,
        include: path.join(__dirname, '..', 'shared'),
				loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass-loader')
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
