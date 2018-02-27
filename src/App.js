import React, { Component } from 'react';
import SearchBar from './containers/Search_bar';
import PokemonTypes from './containers/Pokemon_types';
import { connect } from 'react-redux';

class App extends Component {         
    render() {
        return (
            <div>
                <SearchBar />
                <PokemonTypes 
                    types={this.props.types}
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
