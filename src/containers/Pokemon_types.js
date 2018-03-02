import React, { Component } from 'react';
import { PageSection, PokemonType } from '../components';

class PokemonTypes extends Component
{ 
    renderTypes()
    {
        let PokemonTypes = [];
        const { types } = this.props;
        
        for(let key in types)
        {
            PokemonTypes.push(<PokemonType 
            key={key} 
            type={key} 
            backgroundColor={types[key].backgroundColor}
            color={types[key].color}
            ></PokemonType>);
        }
        
        return PokemonTypes;
    }
    
    render()
    {
        return(
            <PageSection>
                {this.renderTypes()}
            </PageSection>
        )
    }
}

export default PokemonTypes;