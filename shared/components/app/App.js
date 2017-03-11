import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Pointless Demo App</h1>

				<ul>
					<li><Link to="/list">List</Link></li>
				</ul>

				{this.props.children}
			</div>
		);
	}
}
