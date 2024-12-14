import {Skeleton, Stack} from '@mui/material';
import Grid from '@mui/material/Grid2';

const ScrollabeListSkeleton = () => (
  <Grid display={'flex'} flexDirection={'column'}>
    {Array.from({length: 10}).map((_, index) => (
      <Stack
        key={index}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{mb: 1}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Stack>
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={60} height={15} />
          </Stack>
        </Stack>
        <Skeleton variant="text" width={50} height={20} />
      </Stack>
    ))}
  </Grid>
);

export default ScrollabeListSkeleton;
