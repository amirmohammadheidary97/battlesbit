// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

export const LivePulse: React.FC = () => (
  <PulseContainer>
    <PulseIndicator>
      <PulseCore />
    </PulseIndicator>
  </PulseContainer>
);

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(14, 203, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(14, 203, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(14, 203, 129, 0);
  }
`;

const PulseContainer = styled.div`
  border-radius: 43px;
  position: absolute;
  display: flex;
  width: 21px;
  height: 21px;
  right: 3px;
  top: 4px;
  padding: 5px 4px;
  overflow: hidden;
`;

const PulseIndicator = styled.div`
  background-color: #0ecb81;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12px;
  padding: 0 2px;
`;

const PulseCore = styled.div`
  background-color: rgba(14, 203, 129, 0.01);
  border-radius: 50%;
  width: 100%;
  height: 9px;
  animation: ${pulse} 2s infinite;
`;
