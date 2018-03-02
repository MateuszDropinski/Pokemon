import React, { Component } from 'react';
import styled from 'styled-components';
import { PageSection, Input } from '../components';

const SubmitInput = styled.input`
    width:50px;
    font-size: 1rem;
    padding:5px;
    border:1px solid #000000;
    border-radius:2px;
    background-color:#ffffff;
    color:#000000;
    margin-left:5px;
    transition:.25s;
    cursor:pointer;

    &:hover
    {
        background-color:#000000;
        color:#ffffff;
    }
`;

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { searchPokemon: "" };
    }
    
    onInputChange(e)
    {
        this.setState({ searchPokemon: e.target.value});
    }
    
    onFormSubmit(e)
    {
        e.preventDefault();
        
        this.setState({ searchPokemon: "" });
    }
    
    render()
    {
        return (
            <PageSection>
                <form onSubmit={ this.onFormSubmit.bind(this) }>
                    <Input
                        placeholder="Find your pokemon..."
                        value = { this.state.searchPokemon }
                        onChange = { this.onInputChange.bind(this) }
                    />      
                    <SubmitInput 
                        type="submit"
                        value="Search!"
                    />                
                </form>                                 
            </PageSection>
        )
    }
}

export default SearchBar;