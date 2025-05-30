import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const AvailableChallengeBigItem = () => (
  <>
    <Grid
      size={12}
      container
      p={2}
      alignContent={'space-between'}
      sx={{
        backgroundColor: 'background.paper',
        width: 1,
        borderRadius: theme.shape.borderRadius,
        height: '150px',
      }}>
      <Grid size={12} container justifyContent={'space-between'}>
        <Skeleton variant="rounded" height={23.41} width={65.23} />
        <Skeleton variant="circular" height={19} width={19} />
      </Grid>
      <Grid size={12} container spacing={1}>
        <Grid size={12}>
          <Skeleton variant="text" height={21.83} width={50} />
        </Grid>
        <Grid size={12}>
          <Skeleton variant="text" height={21.83} width={'50%'} />
        </Grid>
      </Grid>
    </Grid>
  </>
);

export const AvailableChallengeSmallItem = () => (
  <Grid
    size={12}
    container
    p={2}
    alignContent={'space-between'}
    sx={{
      backgroundColor: 'background.paper',
      width: 1,
      borderRadius: theme.shape.borderRadius,
      height: '150px',
    }}>
    <Grid size={12} container justifyContent={'space-between'}>
      <Skeleton variant="rounded" height={23.41} width={65.23} />
      <Skeleton variant="circular" height={19} width={19} />
    </Grid>
    <Grid size={12} container spacing={1}>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width={'75%'} />
      </Grid>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width={'60%'} />
      </Grid>
    </Grid>
  </Grid>
);
