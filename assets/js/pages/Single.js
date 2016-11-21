import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PokeSingleItem from '../components/PokeSingleItem';
import BigLoader from '../components/BigLoader';
import {fetchPokemonData} from '../store/actions/PokeItemAction';
import _ from 'lodash';

@connect(function(store){
	return {
		pokemonsData : store.PokeItemReducer.pokemonsData
	};
})
export default class Single extends React.Component {
	componentWillMount(){
        // fetch data if this page not accessed  after Home (directly from url)
		if (!this.props.pokemonsData.length){
			this.props.dispatch(fetchPokemonData(this.props.params.name, ("http://pokeapi.co/api/v2/pokemon/" + this.props.params.name) ));
		} 
	}
	render() {

        // look for this pokemon data in store
		var pokeData = _.filter(this.props.pokemonsData, function(item){
			return ((item.name == this.props.params.name) && item.fetched);
		}.bind(this));

        // to show pokemon data (already fetched) or loader (if fetching)
		var showPokeSingle = function(){
			if (pokeData.length){
				pokeData = pokeData[0].data;		
				return (
					<PokeSingleItem
						data = {pokeData} />
				)
			} else {
				return (
				  <div className="col-md-12 single-loader">
		        <BigLoader />
		      </div>				
		    )
			}
		}.bind(this);

		return (
			<section>
				{showPokeSingle()}
			</section>
		)
	}
}