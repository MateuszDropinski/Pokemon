import React from 'react';
import styled from 'styled-components';
import { media } from '../data/media_style';

const PageSection = ({ children }) =>
{
    const Section = styled.article`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding:15px;

        ${media.xs`padding:20px 40px;`}
        ${media.sm`padding:20px 60px 10px 60px;`}
        ${media.md`padding:20px 80px 20px 80px;`}
    `;
    
    return (
        <Section>
            {children}
        </Section>
    )
};

export { PageSection };