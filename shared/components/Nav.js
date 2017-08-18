import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import FeaturedNews from './FeaturedNews';
import LatestNews from './LatestNews';

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/featured">Featured</NavLink>
        <NavLink to="/latest">Latest</NavLink>
      </nav>
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

export default Nav;
