import Grid from '@mui/material/Grid2';

import SectionTitle from '@/components/atoms/SectionTitle';
import LiveChallengesItem from '@/components/molecules/LiveChallengeItem';
import type {TChallange} from '@/types/models/challanges';

type TLiveChallenges = {
  challangeInfo: TChallange;
};

const LiveChallenges = ({challangeInfo}: TLiveChallenges) => (
  <Grid display={'flex'} flexDirection={'column'} size={12}>
    <SectionTitle title="Live Challanges" link="/challanges" />
    <LiveChallengesItem
      customButtonOutline="outlined"
      challangeInfo={challangeInfo}
    />
  </Grid>
);

export default LiveChallenges;
