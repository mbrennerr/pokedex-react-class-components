import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
	render() {
		const { pokemon } = this.props;
		const { name, type, averageWeight, image } = pokemon;
		return (
			<li>
				<div>
					<p>{name}</p>
					<p>{type}</p>
					<p>
						Average Weight:
						<span>
							{`${averageWeight.value} 
                  ${averageWeight.measurementUnit}`}
						</span>
					</p>
				</div>
				<img src={image} alt={name} />
			</li>
		);
	}
}

Pokemon.defaultProps = {
	pokemon: {},
};

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string,
		type: PropTypes.string,
		averageWeight: PropTypes.shape({
			value: PropTypes.number,
			measurementUnit: PropTypes.string,
		}),
		image: PropTypes.string,
		moreInfo: PropTypes.string,
		summary: PropTypes.string,
		foundAt: PropTypes.arrayOf(PropTypes.string),
	}),
};
