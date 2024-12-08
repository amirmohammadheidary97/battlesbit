import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import FullPageDrawerContainer from '@/components/pages/Wallet/components/organism/DrawerContainer';

const BitcoinGenerateLinkDrawerSkeleton = ({isOpen}: {isOpen: boolean}) => (
  <FullPageDrawerContainer isOpen={isOpen} PageTitle="Deposit Bitcoin">
    <Grid container px="1rem" pt="12px">
      {/* Description Skeleton */}
      <Grid size={12}>
        <Typography variant="body2" sx={{mb: '0.5rem'}}>
          <Skeleton width="100%" height="1rem" />
          <Skeleton width="90%" height="1rem" />
          <Skeleton width="80%" height="1rem" />
        </Typography>
      </Grid>

      {/* Warning Tips Skeleton */}
      <Grid size={12}>
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="90%" height="1rem" sx={{mt: '4px'}} />
      </Grid>
      <Grid size={12} sx={{mt: '0.5rem'}}>
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="90%" height="1rem" sx={{mt: '4px'}} />
      </Grid>

      {/* Link Box Skeleton */}
      <Grid size={12} sx={{mt: '1rem'}}>
        <Box
          sx={{
            width: 'calc(100% + 1rem)',
            bgcolor: 'background.paper',
            borderRadius: theme => theme.shape.borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '11px',
            py: '1rem',
            px: '0.5rem',
            position: 'relative',
            left: '-8px',
          }}>
          <Skeleton width="80%" height="1rem" />
          <Skeleton
            variant="rectangular"
            width="60px"
            height="32px"
            sx={{borderRadius: theme => theme.shape.borderRadius}}
          />
        </Box>
      </Grid>

      {/* Button Skeleton */}
      <Grid
        py="24px"
        sx={{display: 'flex', justifyContent: 'center'}}
        size={12}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="48px"
          sx={{borderRadius: 2}}
        />
      </Grid>
    </Grid>
  </FullPageDrawerContainer>
);

export default BitcoinGenerateLinkDrawerSkeleton;
