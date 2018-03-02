import React from 'react';
import styled from 'styled-components';

const Header = ({ children }) =>
{
    const Title = styled.h2`
        text-align:center;
        font-size:2rem;
        margin:0px;
        
        &:first-letter
        {
            text-transform: uppercase;
        }
    `;
    
    return (
        <Title>
            {children}
        </Title>
    )
};

export { Header };