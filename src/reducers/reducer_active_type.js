import { SET_TYPE } from '../actions';

export default function(state = "all", action)
{
    switch(action.type)
    {
        case SET_TYPE:
            return action.payload;
        default:
            return state;
    }
            
}