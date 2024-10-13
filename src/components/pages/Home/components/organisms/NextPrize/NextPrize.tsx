import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {PrizeLevelProgress} from './molecules';

import Cup from '@/assets/img/icons/general/levelprize.png';

export const NextPrize = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={1}
      sx={{
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
      }}>
      <Grid size="grow" container justifyContent={'space-between'} padding={2}>
        <Grid size={12} container spacing={0}>
          <Grid size={12}>
            <Typography
              variant="h5"
              color={theme.palette.text.primary}
              lineHeight={'normal'}>
              Next Prize
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              variant={'h6'}
              lineHeight={'normal'}
              color={theme.palette.primary.main}>{`"El Jefe"`}</Typography>
          </Grid>
        </Grid>
        <Grid size={12} container>
          <Grid size={12}>
            <Typography variant="caption" color={theme.palette.text.secondary}>
              Win 5 game in row
            </Typography>
          </Grid>
          <Grid container size={12}>
            <PrizeLevelProgress progress={55} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size="auto"
        sx={{
          img: {
            maxHeight: '150px',
          },
        }}>
        <img src={Cup} />
      </Grid>
    </Grid>
  );
};
