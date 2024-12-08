import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {
  DoubleButtonSwitchSkeleton,
  RatingSkeleton,
  ScrollabeListSkeleton,
} from './LoadingSections';

export const LeaderBoardTemplate = () => (
  <Grid
    spacing={1.75}
    container
    mt={3}
    sx={{
      p: 3,
    }}>
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'transparent',
        borderRadius: '8px',
      }}>
      {/* Header */}
      {/* <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}>
        <Skeleton variant="text" width={60} height={40} />
        <Skeleton variant="rectangular" width={80} height={30} />
      </Stack> */}
      <DoubleButtonSwitchSkeleton />
      {/* Rating */}
      <RatingSkeleton />
      {/* Leaderboard List */}
      <ScrollabeListSkeleton />
    </Box>
  </Grid>
);
