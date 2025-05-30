import Grid from '@mui/material/Grid2';

import {openGamesList} from '../../../utils/fakeData';

import SectionTitle from '@/components/atoms/SectionTitle';
import LiveChallengesItem from '@/components/molecules/LiveChallengeItem';

const OpenGames = () => (
  <Grid container size={12}>
    <SectionTitle title="Open Games" />
    <Grid container size={12}>
      {openGamesList.map(game => (
        <Grid key={game.id} size={12}>
          <LiveChallengesItem
            customButtonOutline="contained"
            backgroundColorButton="text.primary"
            colorButton="black"
            challangeInfo={game}
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default OpenGames;
