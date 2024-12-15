import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import TipsDialogSkeleton from './TipsDialogSkeleton';

import {theme} from '@/config/theme';

const WaitingToJoinStageSkeleton = () => (
  <Grid container p={'1rem'} spacing={'2.9375rem'}>
    <Grid size={12} container>
      <Grid size={12} sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography
          sx={{
            font: '400 24px Alfa Slab One, sans-serif',
            textAlign: 'center',
            lineHeight: '32.86px',
          }}>
          <Skeleton width={200} />
        </Typography>
      </Grid>
      <Grid size={12} display={'flex'} justifyContent={'center'}>
        <Box
          sx={{
            height: '16.43rem',
            width: '16.43rem',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Skeleton
            sx={{width: '10.5rem', height: '10.5rem'}}
            variant="circular"
          />
        </Box>
      </Grid>
    </Grid>
    <Grid size={12} spacing={2} container>
      <Grid size={12}>
        <TipsDialogSkeleton />
      </Grid>
      <Grid size={12}>
        <Skeleton
          sx={{
            width: 1,
            height: '3.5rem',
            borderRadius: theme.shape.borderRadius,
          }}
          variant="rectangular"
        />
      </Grid>
    </Grid>
  </Grid>
);

export default WaitingToJoinStageSkeleton;
