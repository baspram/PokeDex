import _ from 'lodash';

const commentInitialState = {
	pokemonSingleData : {},
	fetching : false,
	fetched : false,
	error : false
};

export default function reducer (state=commentInitialState, action) {
	switch(action.type){
		case "FETCH_POKEMON_SINGLE_DATA" : {
			
			break;
		}
		case "FETCH_POKEMON_SINGLE_DATA_COMPLETE" : {
			
			break;
		}
		case "FETCH_POKEMON_SINGLE_DATA_ERROR" : {
			
			break;
		}
	}
	return state;
};