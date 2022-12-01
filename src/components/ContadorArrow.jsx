import React, { Component } from 'react';

export default class ContadorArrow extends Component {
	constructor() {
		super();
	}
	state = {
		contador: 0,
	};

	handleClick = () => {
		this.setState((estadoAnterior, _props) => ({
			contador: estadoAnterior.contador + 1,
		}));
	};
	render() {
		const { contador } = this.state;
		return (
			<button type='button' onClick={() => this.handleClick(contador)}>
				Contador2:{contador}
			</button>
		);
	}
}
