import 'babel-register';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import path from 'path';
import pug from 'pug';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.js';

import App from '../src/components/app/App';

const compiler = webpack(webpackConfig);
const app = express();

app.use(express.static('public'));
app.use(require('webpack-hot-middleware')(compiler));
app.set('view engine', 'pug');
app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath
}));

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return false;
  }

  console.log('Listening at http://localhost:3000');
});
