import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { Route, NavLink } from 'react-router-dom';

import Comments from './comments';

const FeaturedStory = ({
  storyFetch,
  match: { params: { id } }
}) => {
  if (storyFetch.fulfilled) {
    const { value: { headline, body } } = storyFetch;

    return (
      <article>
        <h1>{headline}</h1>
        <p>{body}</p>
        <Comments
          storyId={id}
        />
      </article>
    );
  }

  return null;
};

export default connect(props => ({
  storyFetch: `/api/stories/${props.match.params.id}`
}))(FeaturedStory);
