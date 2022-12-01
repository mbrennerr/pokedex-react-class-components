import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
	render() {
		const { onClick, text } = this.props;
		return (
			<button type='button' onClick={onClick}>
				{text}
			</button>
		);
	}
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
};
