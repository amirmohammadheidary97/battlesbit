import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const LevelSectionSkeleton = () => (
  <Grid size={12} container px={2}>
    <Grid
      size={12}
      container
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="background.paper"
      sx={{
        borderRadius: theme => theme.shape.borderRadius,
        height: '9.78125rem',
      }}>
      <Grid
        size={8}
        sx={{...flex().column().acenter().jcenter().gap('1.5rem').result}}>
        <Box sx={{display: 'flex', gap: '0.56rem', width: 1}}>
          <Typography
            sx={{
              fontFamily: 'Alfa Slab One',
              fontSize: '3.5rem',
            }}>
            <Skeleton width={30} />
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Alfa Slab One',
              fontSize: '1.6875rem',
              lineHeight: '2.31rem',
              alignSelf: 'end',
            }}>
            <Skeleton width={80} height={'1.6875rem'} />
          </Typography>
        </Box>
        <Box sx={{...flex().column().gap('0.375rem').result, width: 1}}>
          <Typography variant="caption">
            <Skeleton width="50%" />
          </Typography>
          <Box sx={{...flex().acenter().jstart().gap('0.375rem').result}}>
            {Array.from({length: 3}).map((_, i) => (
              <Box key={i} sx={{...flex().acenter().gap('0.125rem').result}}>
                <Skeleton variant="circular" width={'1rem'} height={'1rem'} />
                <Skeleton variant="rectangular" width="3rem" height="1rem" />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid size={3} sx={{...flex().jcenter().acenter().result}}>
        <Skeleton variant="rectangular" width="9.6rem" height="8rem" />
      </Grid>
    </Grid>
  </Grid>
);

export default LevelSectionSkeleton;
