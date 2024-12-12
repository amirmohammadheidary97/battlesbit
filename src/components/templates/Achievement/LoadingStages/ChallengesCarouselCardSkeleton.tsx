import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const ChallengesCarouselCardSkeleton = () => (
  <Grid
    size={12}
    container
    spacing={1}
    sx={{
      borderRadius: theme => theme.shape.borderRadius,
      bgcolor: 'background.paper',
      p: '0.5rem',
    }}>
    <Grid size={12} sx={{...flex().acenter().gap('0.5rem').result}}>
      <Skeleton variant="circular" width="4.375rem" height="4.375rem" />
      <Box>
        <Typography>
          <Skeleton width="8rem" height="1.375rem" />
        </Typography>
        <Typography>
          <Skeleton width="6rem" height="0.5rem" />
        </Typography>
      </Box>
    </Grid>
    <Grid size={12}>
      <Typography width={1} variant="caption">
        <Skeleton width="100%" height={'calc(21.4px * 3 )'} />
      </Typography>
    </Grid>
    <Grid size={12}>
      <Typography variant="h5" sx={{...flex().jcenter().gap(0.5).result}}>
        <Skeleton width={180} />
      </Typography>
    </Grid>
    <Grid size={12}>
      <Box sx={{...flex().jcenter().wrap().gap('0.25rem').result}} width={1}>
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
);

export default ChallengesCarouselCardSkeleton;
