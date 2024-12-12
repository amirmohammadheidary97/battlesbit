import {Box, Skeleton, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const WalletInfoSkeleton = () => (
  <Stack
    useFlexGap
    gap={'0.25rem'}
    sx={{
      width: 1,
      position: 'relative',
      zIndex: '3 !important',
    }}>
    {/* Selection Component Skeleton */}
    <Box
      sx={{
        ...flex().jcenter().acenter().result,
        width: 1,
      }}>
      <Skeleton
        variant="rectangular"
        width="50%"
        height="2.3rem"
        sx={{py: '12px'}}
      />
    </Box>

    {/* Wallet Balance Skeleton */}
    <Box sx={{...flex().jcenter().result, width: 1}}>
      <Skeleton variant="text" width="8rem" height="3rem" />
    </Box>

    {/* Balance and PNL Skeleton */}
    <Grid container alignItems="center" size={12}>
      <Grid size={7}>
        <Typography variant="caption">
          <Skeleton width="8rem" />
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}
        size={5}>
        <Typography variant="caption">
          <Skeleton width="5rem" />
        </Typography>
      </Grid>
    </Grid>

    {/* Navigation Buttons Skeleton */}
    <Box
      sx={{...flex().acenter().jbetween().result, width: 1, gap: '8px', mt: 2}}>
      {[...Array(3)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width="6rem"
          height="40px"
          sx={{borderRadius: theme => theme.shape.borderRadius}}
        />
      ))}
    </Box>
  </Stack>
);

export default WalletInfoSkeleton;
