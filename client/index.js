import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { isDev } from '../shared/utils';
import App from '../shared/components/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


if (isDev) {
  module.hot.accept();
}
