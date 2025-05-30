import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ChallenggeItemTemplate, InProgressGameCardTemplate} from './components';

import {BackwardTitleTemplate} from '@/components/molecules/BackwardTitleTemplate';

export const ChallengesPageTemplate = () => (
  <>
    <Grid container p={2} spacing={1} size={12}>
      {/******* Backward Title */}
      <Grid size={12}>
        <BackwardTitleTemplate />
      </Grid>
      {/******* Inprogress Games */}
      <Grid container size={12} spacing={1} mt={1}>
        {/* Title Box: InprogressGames */}
        <Skeleton variant="text" height={25} width={100} sx={{mb: 1}} />
        {/* Demos*2 */}
        <InProgressGameCardTemplate />
        <InProgressGameCardTemplate />
      </Grid>
      {/******* Challenges */}
      <Grid container size={12} spacing={2} mt={2}>
        {/* Title Box: Challenges */}
        <Skeleton variant="text" height={24} width={100} />
        {/* ChallengeBigItem */}
        <ChallenggeItemTemplate />
        <ChallenggeItemTemplate />
      </Grid>
    </Grid>
  </>
);
