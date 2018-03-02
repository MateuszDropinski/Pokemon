import { SET_TYPE } from './../actions/index';

export default function(state = [], action)
{
    switch (action.type)
    {
        case SET_TYPE:
            return action.payload;
        default:
            return 'all';
    }
    return state;
}