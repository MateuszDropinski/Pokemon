import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';
import TypesReducer from './reducer_types';
import ActiveTypeReducer from './reducer_active_type';

const rootReducer = combineReducers({
    pokemon: PokemonReducer,
    types: TypesReducer,
    activeType: ActiveTypeReducer
});

export default rootReducer;