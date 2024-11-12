import {useState} from 'react';
import Grid from '@mui/material/Grid2';

import BeforeBeginMatchStage from './components/BeforeBeginMatchStage/BeforeBeginMatchStage';
import WaitingToJoinStage from './components/WaitingToJoinStage/WaitingToJoin';

const MatchLoading = () => {
  const [isChallengerFound, setIsChallengerFound] = useState<Boolean>(false);
  /////
  return (
    <Grid
      container
      size={12}
      alignContent={'center'}
      justifyContent={'center'}
      rowSpacing={!isChallengerFound ? '47px' : undefined}
      sx={{height: '100vh'}}>
      <button onClick={() => setIsChallengerFound(prev => !prev)}>
        Challenger Found toggle
      </button>
      {!isChallengerFound && <WaitingToJoinStage />}
      {isChallengerFound && <BeforeBeginMatchStage />}
    </Grid>
  );
};

export default MatchLoading;
