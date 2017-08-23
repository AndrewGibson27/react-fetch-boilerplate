import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

export default class FeaturedNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/featured" exact component={FeaturedHome} />
        <Route path="/featured/:id" component={FeaturedStory} />
        <Redirect to="/featured" />
      </Switch>
    );
  }
}
