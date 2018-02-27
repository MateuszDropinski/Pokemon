import React from 'react';
import styled from 'styled-components';

const PageSection = (props) =>
{
    const Section = styled.article`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding:20px;
    `;
    
    return (
        <Section>
            {props.children}
        </Section>
    )
};

export { PageSection };