import axios from 'axios';

// fetch intial pokemons data
export function fetchPokemons(limit){
	return function(dispatch){
		dispatch({type:"FETCH_POKEMONS"});
		return axios.get('http://cors.io/?http://pokeapi.co/api/v2/pokemon?limit=' + limit)
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

// fetch pokemons data for infintie scroll
export function fetchMorePokemons(url){
	return function(dispatch){
		var getUrl = "http://cors.io/?" + url;
		return axios.get(getUrl)
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