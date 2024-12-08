import {Skeleton, Stack} from '@mui/material';
import Grid from '@mui/material/Grid2';

const RatingSkeleton = () => (
  <Grid
    container
    spacing={2}
    alignItems="center"
    justifyContent="center"
    mb={3}>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid size={4}>
          <Stack alignItems="center">
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={60} height={20} sx={{mt: 1}} />
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack alignItems="center">
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="text" width={80} height={20} sx={{mt: 1}} />
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack alignItems="center">
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={60} height={20} sx={{mt: 1}} />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default RatingSkeleton;
