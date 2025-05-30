import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const LiveChallengeTemplate = () => (
  <Grid
    container
    size={12}
    p={1.5}
    display={'flex'}
    justifyContent={'space-between'}
    spacing={1}
    sx={{
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'background.default',
      position: 'relative',
    }}>
    <Grid size={5} display={'flex'} flexDirection={'column'}>
      <Skeleton variant="text" width="100%" height="20px" />
      <Grid display={'flex'} alignItems={'center'} gap={3}>
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="100%" height="20px" />
      </Grid>
      <Skeleton variant="text" width="100%" height="60px" />
    </Grid>
    <Grid size={4} display={'flex'} flexDirection={'column'}>
      <Grid display={'flex'} alignItems={'start'} gap={1}>
        <Skeleton variant="circular" width="68px" height="42px" />
        <Grid display={'flex'} flexDirection={'column'} width={'90%'}>
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
        </Grid>
      </Grid>
      <Grid display={'flex'} alignItems={'start'} gap={1} mt={1}>
        <Skeleton variant="circular" width="68px" height="42px" />
        <Grid display={'flex'} flexDirection={'column'} width={'90%'}>
          <Skeleton variant="text" width="100%" height="20px" />
          <Skeleton variant="text" width="100%" height="20px" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
