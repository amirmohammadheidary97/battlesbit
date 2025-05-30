import {Box} from '@mui/material';

import {LastGamePlayerAvatar} from '../../atoms/LastGamePlayers';
import {StatusText} from '../../atoms/StatusText';

import wincoin from '@/assets/img/icons/general/gain.svg';
import looscoin from '@/assets/img/icons/general/loose-coin.svg';
import {flex} from '@/utils/flexHelper';

type player = {avatar: string; id: string};
type Props = {
  players: [player, player];
  winnerPlayerId: string;
  result: number;
};

const myid = '1';

export const LastGameItem = ({players, winnerPlayerId, result}: Props) => (
  <Box sx={{...flex().column().acenter().gap(0.5).result}}>
    <img src={winnerPlayerId === myid ? wincoin : looscoin} />
    <Box sx={{...flex().row().jcenter().result}}>
      <LastGamePlayerAvatar dir="ltr" img={players[0].avatar} />
      <LastGamePlayerAvatar dir="rtl" img={players[1].avatar} />
    </Box>
    <StatusText result={result} />
  </Box>
);
