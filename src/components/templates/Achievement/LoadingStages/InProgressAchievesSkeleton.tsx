import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const InProgressAchievementSkeleton = () => (
  <Grid size={12} container px={2}>
    <Grid container size={12} rowSpacing="0.5rem">
      <Grid size={12}>
        <Typography variant="subtitle1">
          <Skeleton variant="text" width="50%" />
        </Typography>
      </Grid>
      <Grid size={12} container sx={{...flex().jbetween().acenter().result}}>
        {Array.from({length: 2}).map((_, index) => (
          <Grid
            key={index}
            container
            sx={{
              p: '0.625rem',
              gap: '0.5rem',
              width: 'calc(50% - 0.375rem)',
              bgcolor: 'background.paper',
              borderRadius: '0.75rem',
            }}>
            <Grid size={12} sx={{...flex().acenter().gap('0.5rem').result}}>
              <Skeleton
                variant="circular"
                width="2.9375rem"
                height="2.9375rem"
              />{' '}
              {/* Icon skeleton */}
              <Box
                width="60%"
                sx={{
                  ...flex().column().acenter().jcenter().gap('0.25rem').result,
                }}>
                <Typography
                  sx={{
                    fontFamily: 'Alfa Slab One',
                    fontSize: '0.9375rem',
                    lineHeight: '1.28375rem',
                    fontWeight: '400',
                  }}>
                  <Skeleton variant="text" width="3.75rem" />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: '400',
                    lineHeight: '0.681875rem',
                    letterSpacing: '0.004em',
                    fontSize: '0.5rem',
                  }}>
                  <Skeleton variant="text" width="5.625rem" />
                </Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{...flex().jcenter().wrap().gap('0.25rem').result}}
                width={1}>
                <Skeleton
                  variant="rectangular"
                  height="0.6875rem"
                  width="100%"
                  sx={{borderRadius: theme => theme.shape.borderRadius}}
                />{' '}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 1,
                  }}>
                  <Typography
                    variant="overline"
                    fontFamily="Nunito Sans"
                    fontSize="0.625rem"
                    fontWeight="700"
                    lineHeight="0.6875rem">
                    <Skeleton width="1.25rem" />
                  </Typography>
                  <Typography
                    variant="overline"
                    fontFamily="Nunito Sans"
                    fontSize="0.625rem"
                    fontWeight="700"
                    lineHeight="0.6875rem">
                    <Skeleton width="1.25rem" />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default InProgressAchievementSkeleton;
