import {combineReducers} from 'redux';

import PokeTypeReducer from "./reducers/PokeTypeReducer";
import PokeListReducer from "./reducers/PokeListReducer";
import PokeSingleReducer from "./reducers/PokeSingleReducer";
import PokeItemReducer from "./reducers/PokeItemReducer";

export default combineReducers({
	PokeTypeReducer,
	PokeListReducer,
	PokeItemReducer,
	PokeSingleReducer
});
