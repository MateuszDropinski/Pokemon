import React from 'react';
import { CardSection, PokemonType } from './';

const PokemonCard = (props) =>
{
    let { name, height, weight, image, types } = props.pokemon;
    height/=10;
    weight/=10;
    
    const renderTypes = (type) =>
    {
        return  <PokemonType key={type} type={type} />;
    }
    
    return(
        <article>
            <img src={image} alt={name + " image"} />
            <CardSection name="name" value={name}></CardSection>
            <CardSection name="height" value={height + " m"}></CardSection>
            <CardSection name="weight" value={weight + " kg"}></CardSection>
            {types.map(type => renderTypes(type))}
        </article>
    )
}

export { PokemonCard }