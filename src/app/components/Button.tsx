"use client";

import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: var(--blue);
  color: white;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background-color: var(--darkBlue);
  }

  &:disabled {
    background-color: var(--disabled);
    cursor: default;
  }
`;

export default Button;
