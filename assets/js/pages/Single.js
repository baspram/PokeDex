import React from 'react';
import PokeSingleItem from '../components/PokeSingleItem';


export default class Single extends React.Component {
	render() {
		return (
			<section>
				<PokeSingleItem
					name = {this.props.params.name} />
			</section>
		)
	}
}