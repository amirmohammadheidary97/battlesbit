import {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid2';

import BeforeBeginMatchStage from './components/CountDownStart/BeforeBeginMatchStage';
import WaitingToJoinStage from './components/WaitingToJoin/WaitingToJoin';

import WaitingToJoinStageSkeleton from '@/components/templates/MatchLoading/loadingStages/WaitingToJoinStageSkeleton';

const MatchLoading = () => {
  const [isChallengerFound, setIsChallengerFound] = useState<Boolean>(false);
  const [waitingLoading, setWaitingLoading] = useState<Boolean>(true);
  /////
  useEffect(() => {
    setTimeout(() => {
      setWaitingLoading(false);
    }, 1000);
  }, [isChallengerFound]);

  useEffect(() => {
    setTimeout(() => {
      setIsChallengerFound(true);
    }, 4000);
  }, []);
  ///
  return (
    <Grid
      container
      size={12}
      alignContent={'center'}
      justifyContent={'center'}
      rowSpacing={!isChallengerFound ? '47px' : undefined}
      sx={{height: '100vh'}}>
      {!isChallengerFound &&
        (waitingLoading ? (
          <WaitingToJoinStageSkeleton />
        ) : (
          <WaitingToJoinStage />
        ))}
      {isChallengerFound && <BeforeBeginMatchStage />}
    </Grid>
  );
};

export default MatchLoading;
