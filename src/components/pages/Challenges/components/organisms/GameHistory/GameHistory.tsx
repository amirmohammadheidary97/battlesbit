import Grid from '@mui/material/Grid2';

import {gameHistoryItemList} from '../../../utils/fakeData';
import GameHistoryItem from '../../molecules/GameHistoryItem';

import SectionTitle from '@/components/atoms/SectionTitle';

const GameHistory = () => (
  <Grid container size={12}>
    <SectionTitle title="Game History" link="/?state=game-history" />
    <Grid
      container
      size={12}
      display={'flex'}
      flexDirection={'column'}
      gap={0}
      mt={1}>
      {gameHistoryItemList.map(item => (
        <GameHistoryItem key={item.id} gameHistoryItem={item} />
      ))}
    </Grid>
  </Grid>
);

export default GameHistory;
