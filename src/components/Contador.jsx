import React, { Component } from 'react';

export default class Contador extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	state = {
		contador: 0,
	};

	handleClick() {
		this.setState((estadoAnterior, _props) => ({
			contador: estadoAnterior.contador + 1,
		}));
	}

	render() {
		console.log('este é o this completo', this);
		// console.log('este é o estado', this.state);
		// console.log('esta é a prop'.this.props);
		const { contador } = this.state;
		return (
			<>
				<button type='button' onClick={this.handleClick}>
					Contador1:{contador}
				</button>
			</>
		);
	}
}
