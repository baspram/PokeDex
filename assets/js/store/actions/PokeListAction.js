import axios from 'axios';

export function fetchPokemons(){
	return function(dispatch){
		dispatch({type:"FETCH_POKEMONS"});
		axios.get('https://crossorigin.me/http://pokeapi.co/api/v2/pokemon?limit=20')
			.then(function(response){
				var pokemons = response.data.results;
				var count = response.data.count;
				var nextUrl = response.data.next;
				dispatch({
					type:"FETCH_POKEMONS_COMPLETE", 
					value: {
						pokemons: pokemons, 
						count: count,
						nextUrl: nextUrl,
					}
				});
			}).catch(function(error){
				dispatch({type:"FETCH_POKEMONS_ERROR"});
			});
	};
};

export function fetchMorePokemons(url){
	return function(dispatch){
		var getUrl = "https://crossorigin.me/" + url;
		axios.get(getUrl)
			.then(function(response){
				var pokemons = response.data.results;
				var nextUrl = response.data.next;
				dispatch({
					type:"FETCH_MORE_POKEMONS_COMPLETE", 
					value: {
						pokemons: pokemons,
						nextUrl: nextUrl
					}
				});
			}).catch(function(error){
				dispatch({type:"FETCH_MORE_POKEMONS_ERROR"});
			});
	};
};