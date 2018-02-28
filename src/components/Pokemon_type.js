import React from 'react';
import styled from 'styled-components';
import Types from '../reducers/types';

const PokemonType = (props) =>
{   
    let theme = {};
    
    Types.map(type => {
        const name = Object.keys(type)[0];
        theme[name] = type[name];
    });
    
    const TypeTile = styled.button`
        background-color: ${theme[props.type].backgroundColor};
        color: ${theme[props.type].color};
        padding: 5px;
        margin: 5px;
        border-radius: 2px;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border:none;

        &:hover
        {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    `;    
    
    return (
        <TypeTile>{props.type}</TypeTile>
    )
}

export { PokemonType }