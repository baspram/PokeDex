import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

@connect(function(store){
	return {
		pokemonsData : store.PokeItemReducer.pokemonsData
	};
})
export default class PokeSingleItem extends React.Component {
	data : {}
	componentWillMount(){
		if (this.props.pokemonsData.length){
			var pokeData = _.filter(this.props.pokemonsData, function(item){
				return (item.name == this.props.name);
			}.bind(this));
			this.data = pokeData[0].data;	
			console.log(this.data);
		} else {

		}
	}
	render() {
		return (
			<h1> Poke {this.data.name} </h1>
		)
	}
}