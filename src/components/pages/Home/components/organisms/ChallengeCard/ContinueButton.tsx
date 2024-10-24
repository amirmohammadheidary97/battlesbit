// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import styled from '@emotion/styled';

export const ContinueButton: React.FC = () => (
  <StyledButton>
    <ButtonText>continue</ButtonText>
  </StyledButton>
);

const StyledButton = styled.button`
  border-radius: 12px;
  background-color: #f3c73b;
  align-self: stretch;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border: none;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-size: 12px;
  color: #000000;
  font-weight: 600;
  text-transform: uppercase;
`;
