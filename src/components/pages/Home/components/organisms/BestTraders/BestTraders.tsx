import Grid from '@mui/material/Grid2';

import {bestTradersData} from '../../../utils/fakeData';
import BestTraderItem from '../../molecules/BestTraderItem';

import SectionTitle from '@/components/atoms/SectionTitle';

const BestTraders = () => (
  <Grid display={'flex'} flexDirection={'column'} size={12}>
    <Grid pr={2}>
      <SectionTitle title="Best Traders" link="/best-traders" />
    </Grid>
    <Grid
      container
      sx={{
        overflow: 'hidden',
        overflowX: 'scroll',
        flexWrap: 'nowrap',
        width: '100%',
        marginTop: '7px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      rowSpacing={1}
      columnSpacing={1}>
      {bestTradersData.map(trader => (
        <BestTraderItem key={trader.user.userName} trader={trader} />
      ))}
    </Grid>
  </Grid>
);

export default BestTraders;
