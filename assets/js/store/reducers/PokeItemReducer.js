import _ from 'lodash';

const commentInitialState = {
	pokemonsData : [] // for storing all single pokemon data
};

export default function reducer (state=commentInitialState, action) {
	switch(action.type){
		case "FETCH_POKEMON_DATA" : {
			var newData = {
				name : action.value,
				data : "",
				fetching : true,
				fetched : false,
				error : false
			};
			var newPokemonData = Object.assign([], state.pokemonsData, state.pokemonsData.concat(newData));
			state = Object.assign({}, state, {pokemonsData: newPokemonData});
			break;
		}
		case "FETCH_POKEMON_DATA_COMPLETE" : {
			var name = action.value.name;
			var tempPokemonsData = _.filter(state.pokemonsData, function(item){
				return item.name != name;
			});
			var newData = {
				name : action.value.name,
				data : action.value.data,
				fetching : false,
				fetched : true,
				error : false
			};
			var newPokemonData = tempPokemonsData.concat(newData);
			state = Object.assign({}, state, {pokemonsData: newPokemonData});
			break;
		}
		case "FETCH_POKEMON_DATA_ERROR" : {
			var name = action.value.name;
			var tempPokemonsData = _.filter(state.pokemonsData, function(item){
				return item.name != name;
			});
			var newData = {
				name : action.value.name,
				data : "",
				fetching : false,
				fetched : false,
				error : true
			};
			var newPokemonData = tempPokemonsData.concat(newData);
			state = Object.assign({}, state, {pokemonsData: newPokemonData});
			break;
		}
	}
	return state;
};