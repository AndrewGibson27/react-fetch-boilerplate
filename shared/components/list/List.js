import React, { Component } from 'react';
import { Link } from 'react-router';

import ListItem from '../listitem/ListItem';
import styles from './list.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initial || window.INITIAL || { listItems: [] };
  }

  componentDidMount() {
    fetch('/api/list').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        listItems: data.listItems
      });
    }).catch(err => {
      throw new Error(err);
    });
  }

  render() {
    const itemsMarkup = this.state.listItems.map((item, i) => {
      return (
        <Item
          id={item.id}
          title={item.title}
          key={i}
        />
      );
    });

    const self = this;
    const children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        info: self.state.listItems[parseInt(child.props.routeParams.id)-1]
      });
    });

    return (
      <div className={styles.list}>
        <h2 className={styles.listHeader}>List of items</h2>
        <ul className={styles.listItems}>{itemsMarkup}</ul>
        {children}
      </div>
    );
  }
}

function Item(props) {
  return (
    <li>
      <Link to={`/list/item/${props.id}`}>{props.title}</Link>
    </li>
  );
}
