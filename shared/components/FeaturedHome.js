import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { Route, NavLink } from 'react-router-dom';

import asyncComponent from '../asyncComponent';

const FeaturedStory = asyncComponent(() => (
  import('./FeaturedStory').then(module => module.default)
));

const FeaturedHome = ({
  storiesFetch,
  match: { path }
}) => {
  if (storiesFetch.fulfilled) {
    return (
      <div>
        <ul>
          {storiesFetch.value.map(story => (
            <Item
              key={story._id}
              data={story}
              path={path}
            />
          ))}
        </ul>

        <Route
          path={`${path}/:id`}
          component={FeaturedStory}
        />
      </div>
    );
  }

  return null;
}

const Item = ({
  path,
  data: { _id, headline }
}) => (
  <li>
    <p>{headline}</p>
    <NavLink to={`${path}/${_id}`}>Details</NavLink>
  </li>
);

export default connect(props => ({
  storiesFetch: `/api/stories/?category=${props.match.path}`
}))(FeaturedHome);
