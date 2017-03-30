var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './client/entry/index'
  ],

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle-build.js',
    publicPath: '/'
  },

  plugins: [
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
        include: path.join(__dirname, '..', 'shared'),
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
