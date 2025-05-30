import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const BestTradersTemplate = () => (
  <Grid
    container
    size={12}
    px={1.5}
    display={'flex'}
    flexDirection={'column'}
    sx={{
      bgcolor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
      overflow: 'hidden',
    }}>
    <Grid size={12} display={'flex'} justifyContent={'space-between'}>
      <Grid display={'flex'} alignItems={'center'} gap={1}>
        <Skeleton variant="rectangular" width="38px" height="38px" />
        <Grid display={'flex'} flexDirection={'column'}>
          <Skeleton variant="text" width="80px" height="20px" />
          <Skeleton variant="text" width="80px" height="20px" />
        </Grid>
      </Grid>
      <Grid>
        <Skeleton variant="text" width="100px" height="60px" />
      </Grid>
    </Grid>
    <Grid
      mb={1}
      size={12}
      display={'flex'}
      gap={1}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <Grid size={6}>
        <Skeleton variant="text" width="70%" height="20px" />
        <Skeleton variant="text" width="70%" height="20px" />
        <Skeleton variant="text" width="70%" height="20px" />
      </Grid>
      <Grid size={4}>
        <Skeleton variant="text" width="100%" height="60px" />
      </Grid>
    </Grid>
  </Grid>
);
