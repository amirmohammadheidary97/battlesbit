import {Divider, Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import PlayersPicturesSkeleton from './ChallengersPicturesSkeleton';
import MatchResultBadgeContainerSkeleton from './MatchResultBadgeSkeleton';

import {theme} from '@/config/theme';

const ChallengerDetailsSkeleton = () => (
  <Grid container size={12} height={'calc(100vh)'} pb={2} spacing={2}>
    {/* rivals picture */}
    <Grid size={12} height={'35vh'} p={0} container flexWrap={'nowrap'}>
      <PlayersPicturesSkeleton />
    </Grid>
    <Grid
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'55vh'}
      container
      sx={{px: 1}}
      size={12}>
      {/* details about each player */}
      <Grid
        minHeight={'11rem'}
        display={'flex'}
        justifyContent={'space-between'}
        gap={'0.5rem'}
        size={12}>
        <MatchResultBadgeContainerSkeleton />
        <Divider orientation="vertical" />
        <MatchResultBadgeContainerSkeleton />
      </Grid>
      <Grid size={12}>
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={'3.5rem'}
          sx={{borderRadius: theme.shape.borderRadius}}
        />
      </Grid>
    </Grid>
  </Grid>
);

export default ChallengerDetailsSkeleton;
