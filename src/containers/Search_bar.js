import React, { Component } from 'react';
import styled from 'styled-components';
import { PageSection } from '../components';

const Input = styled.input`
    margin-left:auto;
    margin-right:auto;
`;

class SearchBar extends Component
{
    render()
    {
        return (
            <PageSection>
                <Input />                
            </PageSection>
        )
    }
}

export default SearchBar;