import Grid from '@mui/material/Grid2';

import {PlayersSvgWrapper} from './PlayersSvgWrapper';

import player1 from '@/assets/img/icons/avatars/player1.png';
import player2 from '@/assets/img/icons/avatars/player2.png';

export const Players = () => (
  <Grid container size={'auto'} spacing={0} flexWrap={'nowrap'}>
    <Grid size={6}>
      <PlayersSvgWrapper dir="left" img={player1} />
    </Grid>
    <Grid size={6}>
      <PlayersSvgWrapper dir="right" img={player2} />
    </Grid>
  </Grid>
);
