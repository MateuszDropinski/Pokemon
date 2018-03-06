export const SET_TYPE = 'SET_TYPE';
export const SEARCH_TERM = 'SEARCH_TERM';

export function setType(type)
{
    return {
        type: SET_TYPE,
        payload: type
    }
}

export function searchTerm(term)
{
    return {
        type: SEARCH_TERM,
        payload: term
    }
}