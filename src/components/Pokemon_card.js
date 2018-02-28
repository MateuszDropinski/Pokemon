import React from 'react';
import { CardSection, PokemonType } from './';
import styled from 'styled-components';
import Types from '../reducers/types';

const PokemonCard = (props) =>
{
    let { name, height, weight, image, types } = props.pokemon;
    height/=10;
    weight/=10;
    
    const renderTypes = (type) =>
    {
        return  <PokemonType key={type} type={type} />;
    }
    
    let cardColor;
    
    Types.map(type => {
        if(Object.keys(type)[0] == types[0])
        {
            cardColor = type[types[0]].backgroundColor;
        }
    });
    
    const Card = styled.article`
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        width:200px;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        margin:0px 20px 20px 20px;
        padding:20px;
    `;
    
    const Image = styled.img`
        width:100%;
        height:auto;
        align-self:center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin-bottom:5px;
    `
    
    return(
        <Card>
            <Image src={image} alt={name + " image"} />
            <CardSection name="name" value={name}></CardSection>
            <CardSection name="height" value={height + " m"}></CardSection>
            <CardSection name="weight" value={weight + " kg"}></CardSection>
            {types.map(type => renderTypes(type))}
        </Card>
    )
}

export { PokemonCard }