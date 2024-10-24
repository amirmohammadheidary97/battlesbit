// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import styled from '@emotion/styled';

type GameStatusProps = {
  matchState: string;
};

export const GameStatus: React.FC<GameStatusProps> = ({matchState}) => (
  <StatusContainer>
    <GameTitle>Demo for Beginners</GameTitle>
    <StatusWrapper>
      <StatusLabel>Match state:</StatusLabel>
      <StatusValue>{matchState}</StatusValue>
    </StatusWrapper>
  </StatusContainer>
);

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const GameTitle = styled.h2`
  align-self: start;
  height: 21px;
  color: #ffffff;
  font:
    700 18px 'Nunito Sans',
    sans-serif;
  margin: 0 0 8px 0;
`;

const StatusWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  justify-content: start;
`;

const StatusLabel = styled.span`
  color: var(--text-primary, #fff);
  align-self: stretch;
  margin: auto 0;
  font:
    14px 'Nunito Sans',
    sans-serif;
  text-wrap: nowrap;
`;

const StatusValue = styled.span`
  color: var(--success, #0ecb81);
  align-self: stretch;
  width: 121px;
  margin: auto 0;
  font:
    20px 'Alfa Slab One',
    sans-serif;
  text-transform: uppercase;
`;
