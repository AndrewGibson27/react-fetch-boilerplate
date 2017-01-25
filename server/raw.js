import 'babel-register';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import path from 'path';
import pug from 'pug';

const app = express();
import App from '../src/components/app/App';

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

console.log(renderToString(<App />));
