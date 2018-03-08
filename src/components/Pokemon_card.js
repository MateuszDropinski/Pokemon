import React, { Component } from 'react';
import { CardSection, PokemonType, Header } from './';
import styled from 'styled-components';
import { media } from '../data/media_style';

const Card = styled.article`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width:200px;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin:0px 20px 20px 20px;
    padding:20px;
    background:${props => props.background};

    ${media.xs`padding:30px;margin:0px 15px 40px 15px; width:250px;`}
    ${media.sm`width:300px; margin:0px 20px 40px 20px;`}
    ${media.md`margin:0px 30px 50px 30px;`}
`;
    
const Image = styled.img`
    width:100%;
    height:auto;
    align-self:center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin:5px 0px;

    ${media.xs`margin:10px 0px;`}
`;

class PokemonCard extends Component
{       
    createBackground(types)
    {
        let { typesColors } = this.props;
        let firstCardColor = typesColors[0].backgroundColor + '44';
        let secondCardColor = (typesColors[1]) ? typesColors[1].backgroundColor + '44' : null;
        
        return (types[1]) ? `linear-gradient(to bottom right, ${firstCardColor}, ${secondCardColor})` : firstCardColor;
    } 
    
    renderType(type, colors)
    {
        return  <PokemonType key={type} type={type} backgroundColor={colors.backgroundColor} color={colors.color} />;
    }  
    
    render()
    {
        let { name, height, weight, image, types } = this.props.pokemon;
        height/=10;
        weight/=10;
        
        return(
            <Card background={() => this.createBackground(types)} key={name}>
                <Header>{name}</Header>     
                <Image src={image} alt={name + " image"} />
                <CardSection name="height" value={height + " m"}></CardSection>
                <CardSection name="weight" value={weight + " kg"}></CardSection>
                {types.map((type,index) => this.renderType(type, this.props.typesColors[index]))}
            </Card>
        )
    }    
}

export { PokemonCard }