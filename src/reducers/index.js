import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';
import TypesReducer from './reducer_types';

const rootReducer = combineReducers({
    pokemon: PokemonReducer,
    types: TypesReducer
});

export default rootReducer;