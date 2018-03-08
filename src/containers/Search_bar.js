import React, { Component } from 'react';
import styled from 'styled-components';
import { searchTerm } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { media } from '../data/media_style';

const SubmitInput = styled.input`
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

    ${media.xs`padding:10px;`}
    ${media.sm`padding:15px;margin-left:10px;`}
`;

const SearchInput = styled.input`
    width:200px;
    font-size: 1rem;
    padding:5px;
    border-radius:2px;
    border:1px solid #000000;

    ${media.xs`padding:10px;width:300px;`}
    ${media.sm`padding:15px;width:400px`}
    ${media.md`width:500px;`}
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