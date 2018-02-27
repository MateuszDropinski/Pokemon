import React, { Component } from 'react';
import { PageSection, PokemonType } from '../components';

class PokemonTypes extends Component
{    
    renderType(typeInfo)
    {
        const { type, color, backgroundColor } = typeInfo;
        return <PokemonType key={type} type={type} color={color} backgroundColor={backgroundColor} />;
    }
    
    render()
    {
        return(
            <PageSection>
                {this.props.types.map(type => this.renderType(type))}
            </PageSection>
        )
    }
}

export default PokemonTypes;