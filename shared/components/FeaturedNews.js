import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import asyncComponent from '../asyncComponent';

const FeaturedHome = asyncComponent(() => (
  import('./FeaturedHome').then(module => module.default)
));

const FeaturedNews = () => (
  <Route path="/featured" component={FeaturedHome} />
);

export default FeaturedNews;
