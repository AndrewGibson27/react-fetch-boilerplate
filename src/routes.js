import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Inner from './components/inner/Inner';
import InnerSpecific from './components/innerspecific/InnerSpecific';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Inner} />
		<Route path="inner" component={Inner}>
			<Route path="/inner/:id" component={InnerSpecific} />
		</Route>
	</Route>
);

export default routes;
