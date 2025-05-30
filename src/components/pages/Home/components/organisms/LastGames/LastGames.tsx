import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {LastGameItem} from './components/molecules/LastGameItem';

import player1 from '@/assets/img/icons/avatars/player1.png';
import player2 from '@/assets/img/icons/avatars/player2.png';
import {theme} from '@/config/theme';

export const LastGames = () => (
  <Grid
    container
    size={12}
    bgcolor={'background.default'}
    spacing={2}
    p={2}
    borderRadius={theme.shape.borderRadius}
    sx={{}}>
    <Grid size={12}>
      <Typography variant="h6">Last Games</Typography>
    </Grid>
    <Grid size={12} container spacing={2} justifyContent={'space-evenly'}>
      <LastGameItem
        players={[
          {id: '1', avatar: player1},
          {id: '2', avatar: player2},
        ]}
        result={21}
        winnerPlayerId="1"
      />
      <LastGameItem
        players={[
          {id: '1', avatar: player1},
          {id: '2', avatar: player2},
        ]}
        result={-45}
        winnerPlayerId="2"
      />
      <LastGameItem
        players={[
          {id: '1', avatar: player1},
          {id: '2', avatar: player2},
        ]}
        result={15}
        winnerPlayerId="1"
      />
      <LastGameItem
        players={[
          {id: '1', avatar: player1},
          {id: '2', avatar: player2},
        ]}
        result={-21}
        winnerPlayerId="2"
      />
    </Grid>
  </Grid>
);
