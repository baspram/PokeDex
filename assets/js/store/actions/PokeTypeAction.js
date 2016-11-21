import axios from 'axios';

// fetch all pokemon type
export function fetchType(){
	return function(dispatch){
		dispatch({type: "FETCH_TYPE"});
		return axios.get('http://cors.io/?http://pokeapi.co/api/v2/type')
			.then(function(response){
				var types = response.data.results;
				dispatch({type:"FETCH_TYPE_COMPLETE", value:types});
			}).catch(function(error){
				dispatch({type:"FETCH_TYPE_ERROR"});		
			});
	};
};