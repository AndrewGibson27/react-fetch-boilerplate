import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import Nav from './Nav';
import FeaturedNews from './FeaturedNews';
import LatestNews from './LatestNews';

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
