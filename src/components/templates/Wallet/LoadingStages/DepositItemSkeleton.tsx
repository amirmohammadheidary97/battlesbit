import {Box, Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

const DepositItemSkeleton = () => (
  <Grid
    sx={{
      bgcolor: 'background.paper',
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      border: 'none',
      aspectRatio: '1/1',
      width: 'calc((100% - 32px)/3)',
      p: '1rem',
    }}>
    {/* Placeholder for Icon */}
    <Box>
      <Skeleton variant="circular" width={48} height={48} />
    </Box>

    {/* Title and Description Skeletons */}
    <Skeleton width="60%" />
    <Skeleton width="40%" />
  </Grid>
);

export default DepositItemSkeleton;
