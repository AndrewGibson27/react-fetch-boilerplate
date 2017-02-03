if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';

import App from '../components/app/App';
import routes from '../shared/routes';

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
		<Router history={browserHistory} routes={routes} />,
		document.getElementById('root')
	);
});
