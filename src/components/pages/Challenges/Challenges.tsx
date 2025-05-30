import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import ChallengesContainer from './components/organisms/ChallengesContainer';
import GameHistory from './components/organisms/GameHistory';
import OpenGames from './components/organisms/OpenGames';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';

const Challenges = () => (
  <Box display={'flex'} flexDirection={'column'} alignItems={'stretch'} p={2}>
    {/* Backward Title */}
    <BackwardTitle
      title="Challenges"
      isShowBackwardActionIcon
      iconType="timerLoading"
    />
    {/* Open Games */}
    <Grid container mt={2}>
      <OpenGames />
    </Grid>
    {/* Challenges Container */}
    <Grid container mt={2}>
      <ChallengesContainer />
    </Grid>
    {/* Game History */}
    <Grid container mt={1}>
      <GameHistory />
    </Grid>
  </Box>
);
export default Challenges;
