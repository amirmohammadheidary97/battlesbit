import {Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const AchievementInfoSkeleton = () => (
  <Grid container size={12} p="1rem" spacing="0.5rem">
    <Grid size={12} sx={{...flex().column().acenter().jcenter().result}}>
      <Skeleton variant="circular" width="8.8125rem" height="8.8125rem" />
    </Grid>

    <Grid size={12} sx={{...flex().column().acenter().jcenter().result}}>
      <Typography
        sx={{
          fontFamily: 'Alfa Slab One',
          fontSize: '1.5625rem',
          lineHeight: '2.139rem',
          fontWeight: '400',
          width: '70%',
        }}>
        <Skeleton variant="text" width="100%" />
      </Typography>
    </Grid>

    <Grid size={12} sx={{...flex().column().acenter().jcenter().result}}>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Nunito Sans',
          width: '80%',
        }}>
        <Skeleton variant="text" width="100%" />
      </Typography>
    </Grid>

    <Grid size={12}>
      <Typography variant="h6" sx={{width: 1}}>
        <Skeleton variant="text" width="100%" />
      </Typography>
    </Grid>

    <Grid size={12}>
      <Typography variant="h6" sx={{width: 1}}>
        <Skeleton variant="text" width="100%" />
      </Typography>
    </Grid>

    <Grid size={12}>
      <Skeleton
        variant="rectangular"
        sx={{borderRadius: theme => theme.shape.borderRadius}}
        height="2.5rem"
        width="100%"
      />
    </Grid>
  </Grid>
);

export default AchievementInfoSkeleton;
