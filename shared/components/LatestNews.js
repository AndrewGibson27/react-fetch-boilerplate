import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

export default class LatestNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/latest" exact component={LatestHome} />
        <Route path="/latest/:id" component={LatestStory} />
        <Redirect to="/latest" />
      </Switch>
    );
  }
}
