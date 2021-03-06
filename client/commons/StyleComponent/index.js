import * as React from "react";
import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  :hover {
    background: palevioletred;
    color: white;
  }

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export const TitleHeader = styled.h3`
  color: blue;
`;

