import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DynamicSelect extends Component {
	render() {
		const { arrayOfData, onChange } = this.props;
		const options = arrayOfData.map((data, index) => {
			return (
				<option key={index} value={data}>
					{data}
				</option>
			);
		});
		return (
			<select name='customSearch' onChange={onChange}>
				<option>Select Type</option>
				{options}
			</select>
		);
	}
}

DynamicSelect.propTypes = {
	onChange: PropTypes.func,
};
