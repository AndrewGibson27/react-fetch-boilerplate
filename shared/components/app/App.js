import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Simple Demo App</h1>
        {this.props.children}
        <figure className={styles.imageContainer}>
          <img className={styles.imageFile} src={require('../../img/walrus.jpg')} />
          <figcaption className={styles.imageCaption}>"I bet it'll render the same if you turn off JavaScript."</figcaption>
        </figure>
      </div>
    );
  }
}
