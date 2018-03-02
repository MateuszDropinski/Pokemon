export const SET_TYPE = 'SET_TYPE';

export function setType(type)
{
    return {
        type: SET_TYPE,
        payload: type
    }
}