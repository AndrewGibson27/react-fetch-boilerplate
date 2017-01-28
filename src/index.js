import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';

import App from './components/app/App';
import routes from './routes';

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
		<Router {...renderProps} />,
		document.getElementById('root')
	);
})
