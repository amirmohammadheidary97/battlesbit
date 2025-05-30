import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const LastChallengesTemplate = () => (
  <Grid
    container
    size={12}
    p={1.5}
    display={'flex'}
    justifyContent={'space-between'}
    sx={{
      bgcolor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      overflow: 'hidden',
    }}>
    <Grid size={6}>
      <Skeleton variant="text" width="70%" height="20px" />
      <Skeleton variant="text" width="100%" height="20px" />
      <Grid display={'flex'} gap={1} mt={1}>
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="100%" height="20px" />
      </Grid>
    </Grid>
    <Grid size={3}>
      <Skeleton variant="text" width="100%" height="100%" />
    </Grid>
  </Grid>
);
