import React, { Component } from 'react';
import SearchBar from './containers/Search_bar';
import PokemonTypes from './containers/Pokemon_types';
import PokemonList from './containers/Pokemon_list';
import { Header, PageSection } from './components';
import { connect } from 'react-redux';

class App extends Component {  
    
    getPokemonArray()
    {
        if(this.props.activeType != 'all')
            return this.props.pokemon.filter(pokemon => pokemon.types.find(type => type === this.props.activeType));
        else 
            return this.props.pokemon;
    }
    
    render() {                             
        return (
            <div>
                <PageSection>
                    <Header>
                        List of Pokemon
                    </Header>
                </PageSection>                
                <SearchBar />
                <PokemonTypes 
                    types={this.props.types}
                />
                <PokemonList 
                    pokemon={this.getPokemonArray()}
                    types={this.props.types}
                />
            </div>
        );
    }
}

function mapStateToProps(state)
{   
    return state;
}

export default connect(mapStateToProps)(App);
