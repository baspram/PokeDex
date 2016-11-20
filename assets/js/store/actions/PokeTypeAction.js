import axios from 'axios';

export function fetchType(){
	return function(dispatch){
		dispatch({type: "FETCH_TYPE"});
		axios.get('https://crossorigin.me/http://pokeapi.co/api/v2/type')
			.then(function(response){
				var types = response.data.results;
				dispatch({type:"FETCH_TYPE_COMPLETE", value:types});
			}).catch(function(error){
				dispatch({type:"FETCH_TYPE_ERROR"});		
			});
	};
};