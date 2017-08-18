import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import path from 'path';
import pug from 'pug';
import webpack from 'webpack';

import { port, isDev } from '../shared/utils';
import webpackConfig from '../webpack/client.dev.js';

const compiler = webpack(webpackConfig);
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('port', port);

if (isDev) {
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
}

app.get('*', (req, res) => {
  res.render('index', {});
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    if (isDev) {
      console.log(err);
    }
    return false;
  }
  console.log(`Listening at http://localhost:${port}`);
});
