import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const InProgressAchievementSkeleton = () => (
  <Grid container size={12} rowSpacing={'0.5rem'}>
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
            p: '10px',
            gap: '8px',
            width: 'calc(50% - 6px)',
            bgcolor: 'background.paper',
            borderRadius: '12px',
          }}>
          <Grid size={12} sx={{...flex().acenter().gap('8px').result}}>
            <Skeleton variant="circular" width={47} height={47} />{' '}
            {/* Icon skeleton */}
            <Box
              width={'60%'}
              sx={{
                ...flex().column().acenter().jcenter().gap('0.25rem').result,
              }}>
              <Typography
                sx={{
                  fontFamily: 'Alfa Slab One',
                  fontSize: '15px',
                  lineHeight: '20.54px',
                  fontWeight: '400',
                }}>
                <Skeleton variant="text" width={60} />
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: '400',
                  lineHeight: '10.91px',
                  letterSpacing: '0.004em',
                  fontSize: '0.5rem',
                }}>
                <Skeleton variant="text" width={90} />
              </Typography>
            </Box>
          </Grid>
          <Grid size={12}>
            <Box sx={{...flex().jcenter().wrap().gap('4px').result}} width={1}>
              <Skeleton
                variant="rectangular"
                height="11px"
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
                  fontFamily={'Nunito Sans'}
                  fontSize={'10px'}
                  fontWeight={'700'}
                  lineHeight={'11px'}>
                  <Skeleton width={20} />
                </Typography>
                <Typography
                  variant="overline"
                  fontFamily={'Nunito Sans'}
                  fontSize={'10px'}
                  fontWeight={'700'}
                  lineHeight={'11px'}>
                  <Skeleton width={20} />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default InProgressAchievementSkeleton;
