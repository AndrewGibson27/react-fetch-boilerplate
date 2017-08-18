import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { isDev } from '../shared/utils';
import Nav from '../shared/components/Nav';

render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
  document.getElementById('root')
);


if (isDev) {
  module.hot.accept();
}
