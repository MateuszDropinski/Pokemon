import React from 'react';
import styled from 'styled-components';
import { media } from '../data/media_style';

const CardSection = ({ name, value}) =>
{
    const InfoWrapper = styled.p`
        width:100%;
        display:flex;
        justify-content:space-between;
        font-size:1.2rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding:5px;
        margin:5px 0px 5px 0px;

        ${media.xs`margin:10px 0px;`}
        ${media.sm`padding:10px;`}
    `
    
    return (
        <InfoWrapper>
            <span>{name}</span>
            <span>{value}</span>
        </InfoWrapper>
    )
}

export { CardSection };