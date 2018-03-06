import React, { Component } from 'react';
import { PageSection, PokemonCard, Loading } from '../components';

const PokemonList = ({ pokemon, types }) =>
{       
    function renderPokemonCard(pokemon)
    {
        let typesColors = [];
        pokemon.types.map(type => typesColors.push(types[type]));
        return <PokemonCard pokemon={pokemon} key={pokemon.name} typesColors={typesColors} />
    }
    
    return (
        <PageSection>
            {pokemon.map(pokemon =>  renderPokemonCard(pokemon))}         
        </PageSection>
    )
}

export default PokemonList;