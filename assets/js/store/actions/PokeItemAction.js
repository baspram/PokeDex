import axios from 'axios';

export function fetchPokemonData(name, url){
	return function(dispatch){
		var newUrl = 'https://crossorigin.me/' + url;
		console.log("FETCH", name);
		dispatch({type: "FETCH_POKEMON_DATA", value: name});
		axios.get(newUrl)
			.then(function(response){
				var data = response.data;
				console.log("DATA", name);
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