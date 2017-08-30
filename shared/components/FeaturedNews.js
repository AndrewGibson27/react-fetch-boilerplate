import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import asyncComponent from '../asyncComponent';

/* const FeaturedStory = asyncComponent(() => (
  import('./FeaturedStory').then(module => module.default)
));

const FeaturedHome = asyncComponent(() => (
  import('./FeaturedHome').then(module => module.default)
)); */

export default class FeaturedNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* return (
      <Switch>
        <Route path="/featured" exact component={FeaturedHome} />
        <Route path="/featured/:id" component={FeaturedStory} />
        <Redirect to="/featured" />
      </Switch>
    ); */
    return <p>Foo</p>;
  }
}
