const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const match = require('react-router').match;
const RouterContext = require('react-router').RouterContext;
const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
