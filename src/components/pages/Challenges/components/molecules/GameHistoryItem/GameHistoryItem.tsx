import Grid from '@mui/material/Grid2';

import GameHistoryItemInfo from '../../atoms/GameHistoryItemInfo';

import CustomButton from '@/components/atoms/Button';
import type {TGameHistoryItem} from '@/types/models/challanges';

type GameHistoryItemProps = {
  gameHistoryItem: TGameHistoryItem;
};

const GameHistoryItem = ({gameHistoryItem}: GameHistoryItemProps) => (
  <Grid
    mb={2}
    container
    size={12}
    height={'103px'}
    direction={'row'}
    sx={{
      backgroundColor: 'background.paper',
      padding: '12px',
      borderRadius: '12px',
    }}>
    <Grid size={8}>
      <GameHistoryItemInfo
        id={gameHistoryItem.id}
        title={gameHistoryItem.title}
        time={gameHistoryItem.time}
        result={gameHistoryItem.result}
        xp={gameHistoryItem.xp}
        entry={gameHistoryItem.entry}
        date={gameHistoryItem.date}
      />
    </Grid>
    <Grid
      size={4}
      display={'flex'}
      alignItems={'end'}
      justifyContent={'flex-end'}>
      <CustomButton
        color="white"
        variant="outlined"
        content="details"
        fontSize={'12px'}
        textColor="white"
        styleButton={{
          borderRadius: '8px',
        }}
        onClick={() => {}}
        backgroundColor="primary"
        fontWeight={400}
      />
    </Grid>
  </Grid>
);

export default GameHistoryItem;
