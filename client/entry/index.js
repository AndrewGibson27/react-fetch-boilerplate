import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';

import App from '../../shared/components/app/App';
import routes from '../../shared/routes';
import { isDev } from '../../shared/utils';

if (isDev) {
  module.hot.accept();
}

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
  );
});
