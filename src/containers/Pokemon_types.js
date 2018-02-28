import React, { Component } from 'react';
import { PageSection, PokemonType } from '../components';

class PokemonTypes extends Component
{    
    renderType(typeInfo)
    {
        const type = Object.keys(typeInfo)[0];
        return <PokemonType key={type} type={type}/>;
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