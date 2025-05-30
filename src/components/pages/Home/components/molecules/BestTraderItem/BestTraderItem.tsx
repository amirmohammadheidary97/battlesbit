import Grid from '@mui/material/Grid2';

import TraderUserItem from '../../atoms/TraderUserItem';
import BestTraderInfo from '../BestTraderInfo';

import type {TTrader} from '@/types/models/trader';

type Prop = {
  trader: TTrader;
};

const BestTraderItem = ({trader}: Prop) => (
  <Grid
    display={'flex'}
    flexDirection={'column'}
    sx={{
      backgroundColor: 'background.paper',
      padding: '12px',
      borderRadius: '10px',
      width: '281px',
      minWidth: '281px',
    }}>
    <Grid size={12}>
      <TraderUserItem user={trader.user} />
    </Grid>
    <Grid size={12}>
      <BestTraderInfo trader={trader} />
    </Grid>
  </Grid>
);

export default BestTraderItem;
