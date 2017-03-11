import React, { Component } from 'react';

export default class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const currItem = this.props.listItems[parseInt(this.props.params.id)-1];

		return (
			<div>
				{currItem.id}
				{currItem.title}
				{currItem.text}
			</div>
		);
	}
}
