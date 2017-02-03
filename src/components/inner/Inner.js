import React, { Component } from 'react';
import { Link } from 'react-router';

import InnerSpecific from '../innerspecific/InnerSpecific';

export default class Inner extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        <h2>Inbox</h2>

				<ul>
					<li><Link to="/inner/309">309</Link></li>
				</ul>

				<img src={require('../../img/test.jpg')} />

        {this.props.children}
      </div>
		);
	}
}
