import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import asyncComponent from '../asyncComponent';

const FeaturedHome = asyncComponent(() => (
  import('./FeaturedHome').then(module => module.default)
));

export default class FeaturedNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route path="/featured" component={FeaturedHome} />
    );
  }
}
