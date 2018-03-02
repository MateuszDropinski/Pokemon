import React, { Component } from 'react';
import { PageSection, PokemonCard } from '../components';

class PokemonList extends Component
{
    renderPokemonList(pokemon)
    {
        let typesColors = [];
        pokemon.types.map(type => typesColors.push(this.props.types[type]));
        return <PokemonCard pokemon={pokemon} key={pokemon.name} typesColors={typesColors} />
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