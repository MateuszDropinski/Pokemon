import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder, value, onChange }) =>
{
    const StyledInput = styled.input`
        width:200px;
        font-size: 1rem;
        padding:5px;
        border-radius:2px;
        border:1px solid #000000;
    `;
    
    return (
        <StyledInput 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
};

export { Input };