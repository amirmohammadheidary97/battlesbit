// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import styled from '@emotion/styled';

import {ContinueButton} from './ContinueButton';
import {GameStatus} from './GameStatus';
import {LivePulse} from './LivePulse';
import {TimeRemaining} from './TimeRemaining';

type ChallengeCardProps = {
  minutesLeft: number;
  secondsLeft: number;
  matchState: string;
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  minutesLeft,
  secondsLeft,
  matchState,
}) => (
  <GameContainer>
    <GameContent>
      <GameStatus matchState={matchState} />
      <GameImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51f0cd44e164a379dd494c71e4ab59c78888891887912b76f465c976ae920e3e?placeholderIfAbsent=true&apiKey=305c4308d1064f65b99840ae6fe4e523"
        alt="Game visual"
      />
    </GameContent>
    <GameActions>
      <TimeRemaining minutes={minutesLeft} seconds={secondsLeft} />
      <ContinueButton />
    </GameActions>
    <LivePulse />
  </GameContainer>
);

const GameContainer = styled.section`
  border-radius: 12px;
  background-color: #181a20;
  position: relative;
  display: flex;
  min-height: 133px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
`;

const GameContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const GameImage = styled.img`
  aspect-ratio: 2.22;
  object-fit: contain;
  object-position: center;
  width: 115px;
  align-self: start;
`;

const GameActions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px 100px;
  font-family: 'Nunito Sans', sans-serif;
`;
