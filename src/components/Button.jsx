import React from 'react'
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-size:1.4rem;
    background: transparent;
    border-radius: 3px;
    border: none;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    &:hover {
        color: var(--mainBlue);
    }
    `