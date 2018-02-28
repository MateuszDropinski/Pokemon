import React, { Component } from 'react';
import SearchBar from './containers/Search_bar';
import PokemonTypes from './containers/Pokemon_types';
import PokemonList from './containers/Pokemon_list';
import Types from './reducers/types';
import { connect } from 'react-redux';

class App extends Component {         
    render() {
        return (
            <div>
                <SearchBar />
                <PokemonTypes 
                    types={Types}
                />
                <PokemonList 
                    pokemon={this.props.pokemon}
                />
            </div>
        );
    }
}

function mapStateToProps(props)
{
    return props;
}

export default connect(mapStateToProps)(App);
