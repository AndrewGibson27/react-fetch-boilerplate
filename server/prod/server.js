'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _proxyMiddleware = require('proxy-middleware');

var _proxyMiddleware2 = _interopRequireDefault(_proxyMiddleware);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var developing = process.env.NODE_ENV === 'server-dev';
var app = (0, _express2.default)();

app.set('views', _path2.default.resolve(__dirname, '../../templates'));
app.set('view engine', 'jade');

var entry_path = undefined;
var template = undefined;

if (developing) {
    entry_path = '../../src/components/test.js';
    template = 'dev';

    app.use(_path2.default.resolve(__dirname, '/assets/'), (0, _proxyMiddleware2.default)(_url2.default.parse('http://localhost:8080/assets/')));
} else {
    entry_path = '../../build/components/test.js';
    template = 'prod';

    app.use(_express2.default.static(_path2.default.resolve(__dirname, '../../assets')));
}

var App = require(entry_path).default;
var markup = _server2.default.renderToString(_react2.default.createElement(App, null));

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