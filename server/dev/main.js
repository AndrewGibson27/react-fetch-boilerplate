import Webpack_isomorphic_tools from 'webpack-isomorphic-tools';
import config from '../../webpack-isomorphic-tools-config';

const project_base_path = '.';

global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(config)
    .server(project_base_path, function(){
        require('./server');
    });