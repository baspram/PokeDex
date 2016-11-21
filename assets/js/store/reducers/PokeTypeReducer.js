import _ from 'lodash';

const commentInitialState = {
	types : [], // storing all pokemon types
	fetching : false, // fetching trigger
	fetched : false, // fethced trigger
	error : false // error trigger
};

export default function reducer (state=commentInitialState, action) {
	switch(action.type){
		case "FETCH_TYPE" : {
			state = Object.assign({}, state, {fetching : true});
			break;
		}
		case "FETCH_TYPE_COMPLETE" : {
			state = Object.assign({}, state, {fetching : false, fetched: true, types: action.value});
			break;
		}
		case "FETCH_TYPE_ERROR" : {
			state = Object.assign({}, state, {fetching : false, error: true});
			break;
		}
	}
	return state;
};