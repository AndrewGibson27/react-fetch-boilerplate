import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import path from 'path';
import pug from 'pug';
import webpack from 'webpack';
import request from 'request';

import { port, env, isDev, location } from '../../shared/utils';
import webpackConfig from '../../webpack/config.dev.js';
import routes from './routes';
import APIHandler from './api';

const compiler = webpack(webpackConfig);
const app = express();
const API = new APIHandler();

app.use(express.static('public'));
app.use('/api', API.shareRouter());
app.set('view engine', 'pug');
app.set('port', port);

API.createAPICalls();

if (isDev) {
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
}

// http://stackoverflow.com/questions/13442377/redirect-all-trailing-slashes-globally-in-express
app.use((req, res, next) => {
  if (req.url.substr(-1) == '/' && req.url.length > 1) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
});

app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      request(`${location}/api/list`, function(err, response, body) {
        if (!err) {
          res.render('index', {
            initial: JSON.parse(body),
            content: renderToStaticMarkup(
              <RouterContext
                {...renderProps}
                createElement={(Component, props) => <Component {...props} initial={JSON.parse(body)} />}
              />
            )
          });
        }
      });

    } else {
      res.render('index', {
        content: 'Oops, something went wrong'
      });
    }
  });
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    if (isDev) {
      console.log(err);
    }
    return false;
  }
  console.log(`Listening at port ${port}`);
});
