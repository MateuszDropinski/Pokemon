import React, { Component } from 'react';
import SearchBar from './containers/Search_bar';
import PokemonTypes from './containers/Pokemon_types';
import PokemonList from './containers/Pokemon_list';
import { Header, PageSection } from './components';
import { connect } from 'react-redux';

class App extends Component {   
    
    constructor(props)
    {
        super(props);
        
        this.state = { activePokemonList: props.pokemon };
    }
    
    componentWillReceiveProps({ activeType }) {this.filterPokemonList(activeType)};
    
    filterPokemonList(activeType)
    {
        if(activeType === 'all') this.setState({ activePokemonList: this.props.pokemon });
        else this.setState({ activePokemonList: this.props.pokemon.filter(pokemon => pokemon.types.find(type => type === activeType))});
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
                    pokemon={this.state.activePokemonList}
                    types={this.props.types}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps)
{
    return state;
}

export default connect(mapStateToProps)(App);
