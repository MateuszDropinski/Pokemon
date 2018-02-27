import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import PokemonReducer from './reducer_pokemon';

const rootReducer = combineReducers({
    types: TypesReducer,
    pokemon: PokemonReducer
});

export default rootReducer;