import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const SelectedAchievementsSkeleton = () => (
  <Grid size={12} container px={2}>
    <Grid
      container
      size={12}
      rowSpacing="1rem"
      sx={{
        p: '1rem',
        bgcolor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
      }}>
      <Grid size={12}>
        <Typography variant="h5" fontFamily="Nunito Sans" sx={{width: 1}}>
          <Skeleton width="50%" />
        </Typography>
      </Grid>
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        {Array.from({length: 3}).map((_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Skeleton variant="circular" width="6.25rem" height="6.25rem" />
            <Typography
              fontSize="1.125rem"
              width="100%"
              lineHeight="1.54rem"
              mt="0.5rem"
              fontFamily="Alfa Slab One">
              <Skeleton width="100%" />
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default SelectedAchievementsSkeleton;
