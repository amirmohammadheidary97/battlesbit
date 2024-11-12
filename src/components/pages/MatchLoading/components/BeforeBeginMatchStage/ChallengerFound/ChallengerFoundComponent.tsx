import {keyframes} from '@emotion/react';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useMakeMatchState} from '@/components/pages/MakeMatch/state/make-match.state';

type Props = {
  fadeOutStart: Boolean;
  setDetailsStartToShow: React.Dispatch<React.SetStateAction<Boolean>>;
};

const ChallengerFoundComponent = ({
  fadeOutStart,
  setDetailsStartToShow,
}: Props) => {
  const {startMatch, selectedFriend} = useMakeMatchState();
  return (
    <Grid
      size={12}
      onAnimationEnd={() => setDetailsStartToShow(true)}
      sx={{
        animation: fadeOutStart ? `${fadeOut} 1.5s forwards` : undefined,
      }}>
      <Typography
        color="primary"
        sx={{
          font: '400 24px Alfa Slab One, sans-serif',
          textAlign: 'center',
          lineHeight: '32.86px',
        }}>
        {' '}
        {startMatch && startMatch === 'normal'
          ? 'Challenger found'
          : selectedFriend && `${selectedFriend?.name} joined the game`}
      </Typography>
    </Grid>
  );
};

export default ChallengerFoundComponent;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;
