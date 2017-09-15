import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { Route, NavLink } from 'react-router-dom';

import StoryList from './StoryList';
import asyncComponent from '../asyncComponent';

function stripCategorySlash(path) {
  return path.slice(1);
}

const Story = asyncComponent(() => (
  import('./Story').then(module => module.default)
));

const CategoryHome = ({
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

export default connect(props => {
  const category = stripCategorySlash(props.match.path);
  return {
    storiesFetch: `/api/stories/?category=${category}`
  };
})(CategoryHome);
