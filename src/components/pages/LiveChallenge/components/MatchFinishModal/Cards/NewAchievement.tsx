import ReactConfetti from 'react-confetti';
import {useTimeout, useWindowSize} from 'react-use';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import NewAchievmentIcon from '@/assets/img/bg/newAchievment.png';
import {theme} from '@/config/theme';

const NewAchievement = () => {
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
      <Grid
        container
        spacing={2}
        size={12}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          p: 2,
        }}>
        <Grid container size={12}>
          <Grid size={7}>
            <Typography variant="h6">New Achievement Unlocked</Typography>
            <Typography variant="h5" color="primary" mt={1}>
              `Elfelan`
            </Typography>
            <Typography variant="caption" color="success" mt={1}>
              Win 5 game in a row
            </Typography>
          </Grid>
          <Grid
            size={5}
            sx={{
              position: 'relative',
              img: {
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              },
            }}>
            <img src={NewAchievmentIcon} alt="new-achievment" />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{height: '3rem'}}>
            Claim Reward
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NewAchievement;
