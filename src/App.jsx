import React, { Component } from 'react';
import './App.css';
import Pokedex from '../src/components/Pokedex';
import pokemons from '../src/utils/data';

export default class App extends Component {
	render() {
		return (
			<>
				<Pokedex PokemonsData={pokemons} />;
			</>
		);
	}
}
