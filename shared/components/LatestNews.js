import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import asyncComponent from '../asyncComponent';

/* const LatestHome = asyncComponent(() => (
  import('./LatestHome').then(module => module.default)
));

const LatestStory = asyncComponent(() => (
  import('./LatestStory').then(module => module.default)
)); */

export default class LatestNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* return (
      <Switch>
        <Route path="/latest" exact component={LatestHome} />
        <Route path="/latest/:id" component={LatestStory} />
        <Redirect to="/latest" />
      </Switch>
    ); */
    return null;
  }
}
