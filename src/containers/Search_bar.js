import React, { Component } from 'react';
import styled from 'styled-components';
import { searchTerm } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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

const SearchInput = styled.input`
        width:200px;
        font-size: 1rem;
        padding:5px;
        border-radius:2px;
        border:1px solid #000000;
    `;

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { searchPokemon: "" };
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(evt)
    {
        this.setState({ searchPokemon: evt.target.value});
    }
    
    onFormSubmit(e)
    {
        e.preventDefault();
        
        this.setState({ searchPokemon: "" });
        this.props.searchTerm(this.state.searchPokemon);
    }
    
    render()
    {
        return (
            <form onSubmit={ this.onFormSubmit.bind(this) } key="searchForm">
                <SearchInput
                    placeholder="Find your pokemon..."
                    value = { this.state.searchPokemon }
                    onChange = { this.onInputChange }
                />      
                <SubmitInput 
                    type="submit"
                    value="Search!"
                />                
            </form>      
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ searchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);