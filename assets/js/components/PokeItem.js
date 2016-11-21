import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonData} from '../store/actions/PokeItemAction';
import _ from 'lodash';
import PokeItemContent from './PokeItemContent';

@connect(function(store){
	return {
		pokemonsData : store.PokeItemReducer.pokemonsData
	};
})
export default class PokeItem extends React.Component {
	componentWillMount(){
		// fetch more specific data of pokemon for filtering
		this.props.dispatch(fetchPokemonData(this.props.data.name, this.props.data.url));
	}

	render() {
		// get this fetched pokemon data
		var pokeData = _.filter(this.props.pokemonsData, function(item){
			// check if this pokemon type is same as filter
			var isFilter = true;
			if (this.props.filter != 'all'){
				var types = _.filter(item.data.types, function(item){
					return item.type.name == this.props.filter;
				}.bind(this));	
				if(types.length == 0){
					isFilter = false;
				}
			}
			return ((item.name == this.props.data.name) && item.fetched && isFilter);
		}.bind(this));

		// if fetched data have this pokemon data
		if(pokeData.length){
			pokeData = pokeData[0];
			var imgSrc = pokeData.data.sprites.front_default;
			return (
				<PokeItemContent
				 name = {this.props.data.name}
				 imgSrc = {imgSrc}/>
			);
		} else {
			return null;	
		}
	}

}