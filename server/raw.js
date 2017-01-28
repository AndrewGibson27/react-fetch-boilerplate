import 'babel-register';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import path from 'path';
import pug from 'pug';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.js';

import routes from '../src/routes';

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

if (isDev) {
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));
}

app.get('*', function (req, res) {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
			res.render('index', {
		  	env,
				content: renderToString(<RouterContext {...renderProps} />)
		  });
    } else {
			res.render('index', {
		  	env,
				content: 'Oops, something went wrong'
		  });
    }
  });
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(`Listening at http://localhost:${port}`);
});
