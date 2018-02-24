import React from 'react';
import styled from 'styled-components';

const Section = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const PageSection = (props) =>
{
    return (
        <Section>
            {props.children}
        </Section>
    )
};

export { PageSection };