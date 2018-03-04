import React, { Component } from 'react';
import { PageSection, PokemonCard, Loading } from '../components';

var pokemonList = [];

class PokemonList extends Component
{
    renderPokemonCard(pokemon)
    {
        let typesColors = [];
        pokemon.types.map(type => typesColors.push(this.props.types[type]));
        return <PokemonCard pokemon={pokemon} key={pokemon.name} typesColors={typesColors} />
    }
    
    render()
    {
        return(
            <PageSection>
                {this.props.pokemon.map(pokemon =>  this.renderPokemonCard(pokemon))}
            </PageSection>
        )
    }
}

export default PokemonList;