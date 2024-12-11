import Grid from '@mui/material/Grid2';

import WaitingToJoinStageSkeleton from './loadingStages/WaitingToJoinStageSkeleton';

const MatchLoadingTemplate = () => (
  <Grid
    container
    size={12}
    alignContent={'center'}
    justifyContent={'center'}
    rowSpacing={'47px'}
    sx={{height: '100vh'}}>
    <WaitingToJoinStageSkeleton />
  </Grid>
);

export default MatchLoadingTemplate;
