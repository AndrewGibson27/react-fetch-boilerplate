import React, { Component } from 'react';

export default class InnerSpecific extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.params.id}
			</div>
		);
	}
}
