import { SET_TYPE } from './../actions/index';
import pokemon from '../data/pokemon';

const initialState = pokemon;

export default function(state = pokemon, action)
{
    switch (action.type)
    {
        case SET_TYPE:
            if(action.payload === 'all') return initialState;
            else return initialState.filter(pokemon => pokemon.types.find(type => type === action.payload));
        default:
            return state;
    }    
}