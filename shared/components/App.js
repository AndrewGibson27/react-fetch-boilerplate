import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import asyncComponent from '../asyncComponent';

const LatestNews = asyncComponent(() => (
  import('./LatestNews').then(module => module.default)
));

const FeaturedNews = asyncComponent(() => (
  import('./FeaturedNews').then(module => module.default)
));

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route path="/featured" component={FeaturedNews} />
          <Route path="/latest" component={LatestNews} />
          <Redirect to="/featured" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
