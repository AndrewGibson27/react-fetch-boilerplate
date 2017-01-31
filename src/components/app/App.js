import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.app}>
				<ul>
					<li><Link to="/inner">Inner</Link></li>
				</ul>

				{this.props.children}
			</div>
		);
	}
}
