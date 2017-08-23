import React, { Component } from 'react';

import Comments from './Comments';

export default class LatestStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Comments />
      </div>
    );
  }
}
