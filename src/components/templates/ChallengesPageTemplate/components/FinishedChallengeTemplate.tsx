import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const FinishedChallengeTemplate = () => (
  <Grid
    container
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: theme.shape.borderRadius,
    }}
    py={1}
    px={2}
    mt={1}
    size={12}>
    <Grid size={7.5} columns={12} container alignContent={'space-between'}>
      <Grid size={9.24}>
        <Skeleton variant="text" width={'100%'} height={28} />
      </Grid>
      <Grid
        size={6.47}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 0,
        }}>
        <Skeleton variant="text" width={'100%'} height={21.83} />
        <Skeleton variant="text" width={'100%'} height={21.83} />
      </Grid>
    </Grid>
    <Grid size={4.5} columns={12} container spacing={1}>
      <Grid size={12} display={'flex'} justifyContent={'flex-end'}>
        <Skeleton variant="circular" width={40} height={40} />
      </Grid>
      <Grid size={12}>
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={32}
          sx={{
            borderRadius: '1rem',
          }}
        />
      </Grid>
    </Grid>
  </Grid>
);
