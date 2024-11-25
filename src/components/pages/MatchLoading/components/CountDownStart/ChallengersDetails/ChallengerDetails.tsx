import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {keyframes} from '@emotion/react';
import {Button, Divider} from '@mui/material';
import Grid from '@mui/material/Grid2';

import PlayersPicturesBeforeMatch from '../PlayersPicture-BeforeMatch/PlayersPicture-BeforeMatch';

import MatchResultBadgeContainer from './components/MatchResultBadgeContainer';

import {theme} from '@/config/theme';

type MatchResult = 'win' | 'lose';

type LastGames = {mine: MatchResult[]; opponent: MatchResult[]};

type Achivements = {mine: number; opponent: number};

type ChallengerDetailsType = {lastGames: LastGames; achivements: Achivements};

const details: ChallengerDetailsType = {
  lastGames: {
    mine: ['win', 'lose', 'win', 'win', 'lose', 'win'],
    opponent: ['lose', 'lose', 'win', 'win', 'win', 'lose'],
  },
  achivements: {
    mine: 6,
    opponent: 5,
  },
};

const ChallengerDetails = () => {
  const navigate = useNavigate();
  const [countDownStart, setCountDownStart] = useState<number>(8);
  const onCounterEnd = () => {
    navigate('/live-challenge');
  };
  useEffect(() => {
    if (countDownStart === 0) {
      onCounterEnd();
    }
    if (countDownStart > 0) {
      const timer = setInterval(() => {
        setCountDownStart(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDownStart]);
  return (
    <Grid
      container
      size={12}
      height={'calc(100vh - 2rem)'}
      pb={2}
      spacing={2}
      sx={{
        animation: `${fadeIn} 1.5s forwards`,
      }}>
      {/* rivals picture */}
      <Grid
        size={12}
        height={'32vh'}
        p={0}
        container
        flexWrap={'nowrap'}
        sx={{overflowY: 'hidden'}}>
        <PlayersPicturesBeforeMatch />
      </Grid>
      <Grid
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        height={'55vh'}
        container
        sx={{px: 1}}
        size={12}>
        {/* details about each player */}
        <Grid
          minHeight={'11rem'}
          display={'flex'}
          justifyContent={'space-between'}
          gap={'0.5rem'}
          size={12}>
          <MatchResultBadgeContainer
            achivements={details.achivements.mine}
            lastGames={details.lastGames.mine}
          />
          <Divider orientation="vertical" />
          <MatchResultBadgeContainer
            achivements={details.achivements.opponent}
            lastGames={details.lastGames.opponent}
          />
        </Grid>
        <Grid size={12}>
          <Button
            size="large"
            sx={{
              width: 1,
              height: '3.5rem',
              borderRadius: theme.shape.borderRadius,
            }}
            variant="contained"
            color="primary">
            Game start in {countDownStart} s
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChallengerDetails;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
