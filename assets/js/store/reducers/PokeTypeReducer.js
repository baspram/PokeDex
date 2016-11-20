import _ from 'lodash';

const commentInitialState = {
	types : [],
	fetching : false,
	fetched : false,
	error : false
};

export default function reducer (state=commentInitialState, action) {
	switch(action.type){
		case "FETCH_TYPE" : {
			state = Object.assign({}, state, {fetching : true});
			console.log("FETCH_TYPE");
			break;
		}
		case "FETCH_TYPE_COMPLETE" : {
			state = Object.assign({}, state, {fetching : false, fetched: true, types: action.value});
			console.log("FETCH_TYPE_COMPLETE");
			break;
		}
		case "FETCH_TYPE_ERROR" : {
			state = Object.assign({}, state, {fetching : false, error: true});
			console.log("FETCH_ERROR");
			break;
		}
	}
	return state;
};