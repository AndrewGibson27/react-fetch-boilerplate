import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import proxy from 'proxy-middleware';
import url from 'url';

const developing = process.env.NODE_ENV === 'server-dev';
const app = express();

app.set('views', path.resolve(__dirname, '../../templates')); 
app.set('view engine', 'jade');

let entry_path;
let template;

if (developing) {
    entry_path = '../../src/components/App.js';
    template = 'dev';
    
    app.use( path.resolve(__dirname, '/assets/'), proxy(url.parse('http://localhost:8080/assets/')) );
    
} else {
    entry_path = '../../build/components/App.js';
    template = 'prod';
    
    app.use( express.static(path.resolve(__dirname, '../../assets')) );
}

const App = require(entry_path).default;
const markup = ReactDOM.renderToString(<App />);

app.get('/', function (req, res) {
    res.render(template, {
        content: markup
    });
});

app.listen(3000, 'localhost', function onStart(err) {
    if (err) {
        console.log(err);
    }
    
    console.info('Listening at http://localhost:3000/');
});