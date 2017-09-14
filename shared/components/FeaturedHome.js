import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { Route, NavLink } from 'react-router-dom';

import StoryList from './StoryList';
import asyncComponent from '../asyncComponent';

const Story = asyncComponent(() => (
  import('./Story').then(module => module.default)
));

const FeaturedHome = ({
  storiesFetch,
  match: { path }
}) => {
  if (storiesFetch.fulfilled) {
    return (
      <div>
        <StoryList
          stories={storiesFetch.value}
          path={path}
        />

        <Route
          path={`${path}/:id`}
          component={Story}
        />
      </div>
    );
  }

  return null;
}

export default connect(props => ({
  storiesFetch: `/api/stories/?category=${props.match.path}`
}))(FeaturedHome);
