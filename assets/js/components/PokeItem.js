import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPokemonData} from '../store/actions/PokeItemAction';
import _ from 'lodash';

@connect(function(store){
	return {
		pokemonsData : store.PokeItemReducer.pokemonsData
	};
})
export default class PokeItem extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchPokemonData(this.props.data.name, this.props.data.url));
	}
	render() {
		var pokeData = _.filter(this.props.pokemonsData, function(item){
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

		var showItem = function (){
			if(pokeData.length){
				pokeData = pokeData[0];
				var imgSrc = "https://crossorigin.me/" + pokeData.data.sprites.front_default;
				return (
					<div className="col-md-3 poke-item">
						<Link to={"pokemon/"+this.props.data.name}> 
							<div className="poke-item-container">
								<div className="poke-item-image">
									<img src={imgSrc}>
									</img>
								</div>
								<h1> {pokeData.name} </h1>
							</div>
						</Link>
					</div>
				);
			}
			return null;	
		}.bind(this);

		return (
			<div>
				{showItem()}
			</div>
		)
	}
}