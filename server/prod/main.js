'use strict';

var _webpackIsomorphicTools = require('webpack-isomorphic-tools');

var _webpackIsomorphicTools2 = _interopRequireDefault(_webpackIsomorphicTools);

var _webpackIsomorphicToolsConfig = require('../../webpack-isomorphic-tools-config');

var _webpackIsomorphicToolsConfig2 = _interopRequireDefault(_webpackIsomorphicToolsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var project_base_path = '.';

global.webpack_isomorphic_tools = new _webpackIsomorphicTools2.default(_webpackIsomorphicToolsConfig2.default).server(project_base_path, function () {
    require('./server');
});