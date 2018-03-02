import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';
import ActiveTypeReducer from './reducer_active_type';
import TypesReducer from './reducer_types';

const rootReducer = combineReducers({
    pokemon: PokemonReducer,
    types: TypesReducer,
    activeType: ActiveTypeReducer
});

export default rootReducer;