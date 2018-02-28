import React from 'react';
import styled from 'styled-components';

const CardSection = (props) =>
{
    return (
        <article>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </article>
    )
}

export { CardSection };