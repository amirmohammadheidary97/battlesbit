import {useEffect, useState} from 'react';
import {keyframes} from '@emotion/react';
import {Button, Divider} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {challengerDetails} from '../../fakeData/fakeData';
import PlayersPicturesBeforeMatch from '../PlayersPictures/PlayersPictures';

import MatchResultBadgeContainer from './components/MatchResultBadgeContainer';

import {theme} from '@/config/theme';

const ChallengerchallengerDetails = () => {
  const [countDownStart, setCountDownStart] = useState<number>(8);

  useEffect(() => {
    if (countDownStart > 0) {
      const timer = setInterval(() => {
        setCountDownStart(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
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
        {/* challengerDetails about each player */}
        <Grid
          minHeight={'11rem'}
          display={'flex'}
          justifyContent={'space-between'}
          gap={'0.5rem'}
          size={12}>
          <MatchResultBadgeContainer
            achivements={challengerDetails.achivements.mine}
            lastGames={challengerDetails.lastGames.mine}
          />
          <Divider orientation="vertical" />
          <MatchResultBadgeContainer
            achivements={challengerDetails.achivements.opponent}
            lastGames={challengerDetails.lastGames.opponent}
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

export default ChallengerchallengerDetails;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
