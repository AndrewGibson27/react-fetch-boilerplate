import React from 'react';

import styles from './listitem.scss';

export default props => {
  return (
    <div className={styles.itemContainer}>
      <h3 className={styles.itemTitle}>{props.info.title} ({props.info.id})</h3>
      <p className={styles.itemText}>{props.info.text}</p>
    </div>
  );
}
