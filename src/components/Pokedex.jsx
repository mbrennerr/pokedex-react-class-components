import React, { Component } from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import notFound from '../assets/not_found.jpeg';
import DynamicSelect from './DynamicSelect';
export default class Pokedex extends Component {
	constructor() {
		super();
	}

	state = {
		pokemonIndex: 0,
		filteredName: '',
	};
	/*Filter by name*/
	filterByName = (event) => {
		const { value } = event.target;
		this.setState(() => ({
			filteredName: value,
		}));
	};

	render() {
		const { PokemonsData } = this.props;
		const { pokemonIndex } = this.state;
		const { filteredName } = this.state;
		const filteredPokemons = PokemonsData.filter((pokemon) => {
			return filteredName === ''
				? pokemon
				: pokemon.name.includes(filteredName);
		});
		const isPokemonFound = filteredPokemons[pokemonIndex];
		const ArrayOfTypes = PokemonsData.map((pokemon) => {
			return pokemon.type;
		});
		return (
			<main className='App'>
				<h1>Pokedex</h1>
				<input onChange={this.filterByName} type='text' />
				<div>
					{isPokemonFound ? (
						<Pokemon pokemon={filteredPokemons[pokemonIndex]} />
					) : (
						<>
							<div>
								<img src={notFound} width='150px' />
							</div>
							<strong>Pokémon Not Found</strong>
						</>
					)}
				</div>
				<div>
					<Button onClick={'lala'} text='Prev' />
					<Button onClick={'lala'} text='Next' />
				</div>
				<div>
					<DynamicSelect
						onChange={'lalal'}
						arrayOfData={ArrayOfTypes}
					/>
				</div>
			</main>
		);
	}
}
