import axios from 'axios';

// fetch single pokemon data
export function fetchPokemonData(name, url){
	return function(dispatch){
		var newUrl = 'https://crossorigin.me/' + url;
		dispatch({type: "FETCH_POKEMON_DATA", value: name});
		axios.get(newUrl)
			.then(function(response){
				var data = response.data;
				dispatch({
					type:"FETCH_POKEMON_DATA_COMPLETE",
					value: {
						name : name,
						data : data
					}});
			}).catch(function(error){
				console.log("ERROR", name);
				dispatch({
					type:"FETCH_POKEMON_DATA_ERROR",
					value: {
						name : name
					}});
			});
	};
};