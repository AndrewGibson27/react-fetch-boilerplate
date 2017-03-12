import React from 'react';

export default props => {
	return (
		<div>
			{props.info.id}
			{props.info.title}
			{props.info.text}
		</div>
	);
}
