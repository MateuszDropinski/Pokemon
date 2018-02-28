import React, { Component } from 'react';
import { PageSection, PokemonCard } from '../components';

class PokemonList extends Component
{
    renderPokemonList(pokemon)
    {
        return <PokemonCard pokemon={pokemon} key={pokemon.name} />
    }
    
    render()
    {
        return(
            <PageSection>
                {this.props.pokemon.map(pokemon => this.renderPokemonList(pokemon))}
            </PageSection>
        )
    }
}

export default PokemonList;