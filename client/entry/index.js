import React from 'react';
import { render } from 'react-dom';

import routes from '../../shared/routes';
import { isDev } from '../../shared/utils';

/* match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <AppContainer>
      <Router history={browserHistory} routes={routes} />
    </AppContainer>,
    document.getElementById('root')
  );
});

if (isDev) {
  module.hot.accept();
} */
