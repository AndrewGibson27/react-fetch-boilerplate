import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import List from './components/list/List';
import ListItem from './components/listitem/ListItem';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
    <Route path='list' component={List}>
      <Route path='item/:id' component={ListItem} />
    </Route>
  </Route>
);
