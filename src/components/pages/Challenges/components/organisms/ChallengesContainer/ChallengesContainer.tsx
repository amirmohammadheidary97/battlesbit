import Grid from '@mui/material/Grid2';

import {challengesItemList} from '../../../utils/fakeData';
import ChallengeItem from '../../molecules/ChallengeItem';

import SectionTitle from '@/components/atoms/SectionTitle';

const ChallengesContainer = () => (
  <Grid container size={12}>
    <SectionTitle title="Challenges" />
    <Grid container size={12} mt={1}>
      {challengesItemList.map(challenge => (
        <Grid key={challenge.id} size={12}>
          <ChallengeItem
            key={challenge.id}
            challenge={challenge}
            href={'/challenge-detail'}
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default ChallengesContainer;
