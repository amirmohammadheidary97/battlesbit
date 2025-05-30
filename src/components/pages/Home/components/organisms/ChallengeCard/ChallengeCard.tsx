import {useNavigate} from 'react-router';
import {Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {GameStatus} from './components/GameStatus';
import {LivePulse} from './components/LivePulse';
import {Players} from './components/Players/Players';
import {TimeRemaining} from './components/TimeRemaining';

import {theme} from '@/config/theme';

type ChallengeCardProps = {
  minutesLeft: number;
  secondsLeft: number;
  matchState: string;
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  minutesLeft,
  secondsLeft,
  matchState,
}) => {
  const navigate = useNavigate();
  const onContinueBtnClick = () => {
    navigate('/live-challenge');
  };
  return (
    <Grid
      container
      size={12}
      p={2}
      spacing={3}
      sx={{
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'background.default',
        position: 'relative',
      }}>
      <Grid container size={12} spacing={2}>
        <Grid size="grow">
          <GameStatus matchState={matchState} />
        </Grid>
        <Grid size="auto">
          <Players />
        </Grid>
      </Grid>
      <Grid
        container
        size={12}
        spacing={2}
        justifyContent={'space-between'}
        alignItems={'flex-end'}>
        <TimeRemaining minutes={minutesLeft} seconds={secondsLeft} />
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={onContinueBtnClick}
          sx={{
            borderRadius: 10,
            px: 2.5,
          }}>
          Continue
        </Button>
      </Grid>
      <LivePulse />
    </Grid>
  );
};
