import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {SectionTitleTemplate} from '../HomePageTemplate/components';

import {
  ChallenggeItemTemplate,
  LevrageBoxTemplate,
  UserChallengeInfoTemplate,
} from './components';

import {BackwardTitleTemplate} from '@/components/molecules/BackwardTitleTemplate';

const ChallengeDetailPageTemplate = () => (
  <>
    <Grid container spacing={1} size={12}>
      <Grid size={12}>
        <BackwardTitleTemplate isShowHrefBtn={false} />
      </Grid>
      <Grid size={12} px={3}>
        <UserChallengeInfoTemplate />
      </Grid>
      <Grid size={12} px={3} mt={1}>
        <ChallenggeItemTemplate />
      </Grid>
      <Grid size={12} px={3} mt={1}>
        <Skeleton
          sx={{mb: '3px'}}
          variant="text"
          width={'100%'}
          height={'10px'}
        />
        <Skeleton
          sx={{mb: '10px'}}
          variant="text"
          width={'80%'}
          height={'10px'}
        />
        <Skeleton
          sx={{mb: '3px'}}
          variant="text"
          width={'100%'}
          height={'10px'}
        />
        <Skeleton
          sx={{mb: '3px'}}
          variant="text"
          width={'100%'}
          height={'10px'}
        />
        <Skeleton
          sx={{mb: '3px'}}
          variant="text"
          width={'100%'}
          height={'10px'}
        />
        <Skeleton
          sx={{mb: '3px'}}
          variant="text"
          width={'10%'}
          height={'10px'}
        />
      </Grid>
      <Grid size={12} px={2}>
        <SectionTitleTemplate />
        <LevrageBoxTemplate />
      </Grid>
    </Grid>
  </>
);

export default ChallengeDetailPageTemplate;
