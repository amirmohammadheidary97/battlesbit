import Grid from '@mui/material/Grid2';

import ChallangeInfo from '../ChallangeInfo';
import TraderItem from '../TraderItem';

import type {TChallange} from '@/types/models/challanges';

type TLiveChallengesItem = {
  challangeInfo: TChallange;
  customButtonOutline: 'text' | 'outlined' | 'contained';
  backgroundColorButton?: string;
  colorButton?: string;
};

const LiveChallengesItem = ({
  challangeInfo,
  customButtonOutline,
  backgroundColorButton = 'transparent',
  colorButton = 'white',
}: TLiveChallengesItem) => (
  <Grid
    mt={1}
    size={12}
    display={'flex'}
    justifyContent={'space-between'}
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: '10px',
      padding: '12px',
    }}>
    <ChallangeInfo
      backgroundColorButton={backgroundColorButton}
      colorButton={colorButton}
      title={challangeInfo.title}
      balance={challangeInfo.amount.toString()}
      time={challangeInfo.time}
      customButtonOutline={customButtonOutline}
    />
    <Grid
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      gap={1.5}>
      {challangeInfo.traders.map(trader => (
        <TraderItem
          key={trader.id}
          id={trader.id}
          userName={trader.userName}
          balance={trader.balance}
          profileImage={trader.profileImage}
        />
      ))}
    </Grid>
  </Grid>
);

export default LiveChallengesItem;
