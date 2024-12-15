import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {BasicTimeUnits} from '@/components/atoms/TimeSpent';
import {MatchStatusSlider} from '@/components/molecules/MatchStatusSlider';

export const LiveChallengeItem = () => {
  //
  const theme = useTheme();
  //
  return (
    <Grid
      container
      columns={24}
      spacing={2}
      sx={{
        background: theme.palette.background.paper,
        width: '100%',
        padding: 2,
        marginY: 1,
        borderRadius: '14px',
      }}>
      <Grid size={11} spacing={2} container columns={12}>
        <Grid size={12}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '600',
            }}>
            Demo For Begginers For Begginers
          </Typography>
        </Grid>
        <Grid size={12} container columns={12} spacing={0.25}>
          <Grid size="auto">
            <BasicTimeUnits
              time={23 * 1000}
              typographyProps={{
                variant: 'body1',
                color: theme.palette.text.primary,
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
      <Grid size="grow" container columns={12}>
        <MatchStatusSlider
          player1={{
            name: '',
            progressPercent: 10,
            income: undefined,
          }}
          player2={{
            name: '',
            progressPercent: 50,
            income: undefined,
          }}
        />
      </Grid>
    </Grid>
  );
};
