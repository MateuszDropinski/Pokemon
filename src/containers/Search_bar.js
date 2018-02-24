import React, { Component } from 'react';
import styled from 'styled-components';
import { PageSection } from '../components';

const TextInput = styled.input`
    width:200px;
    font-size: 1rem;
    padding:5px;
`;

const SubmitInput = styled.input`
    width:50px;
    font-size: 1rem;
    padding:5px;
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
                    <TextInput
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