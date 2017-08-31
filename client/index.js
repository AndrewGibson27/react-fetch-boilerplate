import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import config from './config';
import App from '../shared/components/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (config.isDev) {
  module.hot.accept();
}
