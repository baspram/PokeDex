import _ from 'lodash';

const commentInitialState = {
	count: "", // all pokemon count
	pokemons : [], // all pokemon initial data (name & url)
	nextUrl: "", //  next url for infinite scroll
	fetching : false, // for fetching trigger
	fetched : false, // for fetched trigger
	error : false // for error trigger
};

export default function reducer (state=commentInitialState, action) {
	switch(action.type){
		case "FETCH_POKEMONS" : {
			state = Object.assign({}, state, {fetching: true});
			break;
		}
		case "FETCH_POKEMONS_COMPLETE" : {
			state = Object.assign({}, state, {fetching: false, fetched: true, pokemons: action.value.pokemons, count: action.value.count, nextUrl: action.value.nextUrl});
			break;
		}
		case "FETCH_POKEMONS_ERROR" : {
			state = Object.assign({}, state, {fetching: false, error: true});
			break;
		}
		case "FETCH_MORE_POKEMONS_COMPLETE" : {
			state = Object.assign({}, state, {pokemons: state.pokemons.concat(action.value.pokemons), nextUrl: action.value.nextUrl});
			break;
		}
	}
	return state;
};