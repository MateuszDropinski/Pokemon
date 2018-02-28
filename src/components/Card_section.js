import React from 'react';
import styled from 'styled-components';

const CardSection = (props) =>
{
    const InfoWrapper = styled.p`
        width:100%;
        display:flex;
        justify-content:space-between;
        font-size:1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding:5px;
        margin:5px 0px 5px 0px;
    `
    
    return (
        <InfoWrapper>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </InfoWrapper>
    )
}

export { CardSection };