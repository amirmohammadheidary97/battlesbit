import {useNavigate} from 'react-router';
import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {BasicTimeUnits} from '@/components/atoms/TimeSpent';
import {MatchStatusSlider} from '@/components/molecules/MatchStatusSlider';

export const LiveChallengeItem = () => {
  //
  const theme = useTheme();
  const navigate = useNavigate();
  const navToGamePage = () => navigate('/live-challenge');
  //
  return (
    <Grid
      container
      columns={12}
      spacing={0.5}
      onClick={navToGamePage}
      sx={{
        background: theme.palette.background.paper,
        width: '100%',
        padding: 2,
        borderRadius: '14px',
      }}>
      <Grid size={8.5} spacing={1} container columns={12}>
        <Grid size={12}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '600',
              textWrap: 'nowrap',
            }}>
            Demo For Begginers
          </Typography>
        </Grid>
        <Grid size={12} container columns={12} spacing={0.25}>
          <Grid size="auto">
            <BasicTimeUnits
              time={23 * 1000}
              typographyProps={{
                variant: 'body1',
                color: theme.palette.primary.main,
              }}
            />
          </Grid>
          <Grid size="auto">
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Time Left
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={3.5} container columns={12}>
        <MatchStatusSlider
          scale={0.5}
          player1={{
            name: 'You',
            progressPercent: 10,
            income: undefined,
          }}
          player2={{
            name: 'Mostafa',
            progressPercent: 50,
            income: undefined,
          }}
        />
      </Grid>
    </Grid>
  );
};
