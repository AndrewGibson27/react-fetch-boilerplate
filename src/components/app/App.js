import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/inner">Inner</Link></li>
				</ul>

				{this.props.children}
			</div>
		);
	}
}
