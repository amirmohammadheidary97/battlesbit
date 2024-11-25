import ReactConfetti from 'react-confetti';
import {useTimeout, useWindowSize} from 'react-use';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import WinnerPanda from '@/assets/img/bg/winner-panda.png';
import {theme} from '@/config/theme';

const WinCard = () => {
  const {width, height} = useWindowSize();

  const [isConfettiOpen] = useTimeout(5000);
  return (
    <>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={700}
        recycle={!isConfettiOpen()}
      />
      {/* Image */}
      <Grid
        size={11}
        offset={0.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '38.7323944vh',
          img: {
            maxWidth: '100%',
            maxHeight: '100%',
            mb: -1.5,
          },
        }}>
        <img src={WinnerPanda} alt="winner-pani" />
      </Grid>
      {/* Card */}
      <Grid
        container
        size={12}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          p: 2,
        }}>
        <Grid size={12}>
          <Typography variant="h5" align="center" gutterBottom color="primary">
            You Win Challenge
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis, justo vel sagittis lobortis, arcu mauris molestie
          </Typography>
        </Grid>
        <Grid size={12} mt={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{height: '3rem'}}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default WinCard;
