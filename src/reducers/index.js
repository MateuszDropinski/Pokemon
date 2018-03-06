import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';
import TypesReducer from './reducer_types';
import ActiveTypeReducer from './reducer_active_type';
import SearchTermReducer from './reducer_search_term';

const rootReducer = combineReducers({
    pokemon: PokemonReducer,
    types: TypesReducer,
    activeType: ActiveTypeReducer,
    searchTerm: SearchTermReducer
});

export default rootReducer;