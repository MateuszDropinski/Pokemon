import React from 'react';
import { CardSection, PokemonType } from './';
import styled from 'styled-components';
import TypesData from '../reducers/types';

const PokemonCard = (props) =>
{
    let { name, height, weight, image, types } = props.pokemon;
    height/=10;
    weight/=10;
    
    const renderTypes = (type) =>
    {
        return  <PokemonType key={type} type={type} />;
    }
    
    const createBackground = () =>
    {
        let firstCardColor, secondCardColor;
        
        TypesData.map(type => {
            if(type[types[0]]) firstCardColor = type[types[0]].backgroundColor + '44';
            if(type[types[1]]) secondCardColor = type[types[1]].backgroundColor + '44';
        });
        
        if(types[1])
        {
            return `linear-gradient(to bottom right, ${firstCardColor}, ${secondCardColor})`;
        }
        
        else 
        {            
            return firstCardColor;
        }
    }
    
    const Card = styled.article`
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        width:200px;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        margin:0px 20px 20px 20px;
        padding:20px;
        background:${createBackground()};
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