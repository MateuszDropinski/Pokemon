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
        
        this.state = { lastType: "all", lastTerm: "", whichFilter: ""};
    }
    
    componentWillReceiveProps(props)
    {
        if(this.props.activeType !== props.activeType)
            this.setState({whichFilter:"type"});
        else if(this.props.searchTerm !== props.searchTerm)
            this.setState({whichFilter:"term"});
        else 
            this.setState({whichFilter:""})
    }
    
    getPokemonArray()
    {
        if(this.props.activeType !== 'all' && this.state.whichFilter === "type")
            return this.props.pokemon.filter(pokemon => pokemon.types.find(type => type === this.props.activeType));
        else if(this.props.searchTerm !== "" && this.state.whichFilter === "term")
            return this.props.pokemon.filter(pokemon => pokemon.name.includes(this.props.searchTerm.toLowerCase()));
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
                <PageSection>
                    <SearchBar />
                </PageSection>       
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
