// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import styled from '@emotion/styled';

type TimeRemainingProps = {
  minutes: number;
  seconds: number;
};

export const TimeRemaining: React.FC<TimeRemainingProps> = ({
  minutes,
  seconds,
}) => (
  <TimeWrapper>
    <TimeValue>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</TimeValue>
    <TimeLabel>Minutes Left</TimeLabel>
  </TimeWrapper>
);

const TimeWrapper = styled.div`
  align-self: stretch;
  height: 21px;
  gap: 8px;
  font-size: 16px;
  color: var(--text-secondary, #6d6d6d);
  font-weight: 400;
  margin: auto 0;
`;

const TimeValue = styled.span`
  color: #f3c73b;
`;

const TimeLabel = styled.span`
  font-size: 14px;
  line-height: 19px;
  margin-inline-start: 0.25rem;
`;
