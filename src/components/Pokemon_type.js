import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setType } from '../actions';

const TypeTile = styled.button`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
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

class PokemonType extends Component
{   
    render()
    {
        const { color, backgroundColor, type, setType } = this.props;
        
        return (
            <TypeTile 
               backgroundColor={backgroundColor} 
               color={color} 
               type={type} 
               onClick={() => setType(type)}
            >
                {type}
            </TypeTile>
        )
    }
    
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ setType }, dispatch);
}

const connectedComponent = connect(null, mapDispatchToProps)(PokemonType);

export { connectedComponent as PokemonType};