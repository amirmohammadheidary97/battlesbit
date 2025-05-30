import type {FC} from 'react';
import Grid from '@mui/material/Grid2';

import {ChallengeDemoLeftCardItems} from '../../molecules/ChallengeDemoLeftCardItems';
import {ChallengeDemoRightCardItems} from '../../molecules/ChallengeDemoRightCardItems';

type TChallengeDemoResultCardProps = {
  result: 'LOST' | 'WON';
  challengeDate: string;
};

export const ChallengeDemoResultCard: FC<TChallengeDemoResultCardProps> = ({
  result,
  challengeDate,
}) => (
  <Grid
    container
    bgcolor="#25272F"
    py={1}
    px={2}
    mt={1}
    borderRadius={'.7rem'}
    size={12}>
    {/* Left Grid Items */}
    <Grid size={7.5}>
      <ChallengeDemoLeftCardItems date={challengeDate} result={result} />
    </Grid>
    {/* Right Grid Items */}
    <Grid size={4.5} container>
      <ChallengeDemoRightCardItems />
    </Grid>
  </Grid>
);
