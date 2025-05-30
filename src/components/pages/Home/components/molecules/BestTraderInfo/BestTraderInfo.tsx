import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import SmoothAreaChart from '../../atoms/SmoothAreaChart';

import Pricing from '@/components/atoms/Pricing';
import type {TTrader} from '@/types/models/trader';

type Props = {
  trader: TTrader;
};

const BestTraderInfo = ({trader}: Props) => (
  <Grid
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'flex-end'}
    size={12}>
    <Grid display={'flex'} flexDirection={'column'}>
      <Grid>
        <Typography fontSize={'8px'} fontWeight={400} color={'text.secondary'}>
          PNL[{trader.pnl}]
        </Typography>
      </Grid>
      <Grid>
        <Pricing
          decimalTextProps={{
            fontSize: '10px',
            fontWeight: 500,
          }}
          isPriceLimit
          symbolTextProps={{
            fontSize: '8px',
            sx: {
              mt: 0.2,
              color: 'text.secondary',
            },
          }}
          mainTextProps={{
            fontWeight: 500,
          }}
          amount={trader.balance}
          formatPrice={'USDT'}
        />
      </Grid>
      <Grid>
        <Pricing
          decimalTextProps={{
            fontSize: '10px',
            fontWeight: 500,
          }}
          symbolTextProps={{
            fontSize: '10px',
            sx: {
              mt: 0.2,
              color: 'text.secondary',
            },
          }}
          mainTextProps={{
            fontWeight: 500,
          }}
          hideDecimalIfZero
          isPriceLimit
          amount={trader.balancePercentage}
          formatPrice={'%'}
        />
      </Grid>
    </Grid>
    <Grid>
      <SmoothAreaChart />
    </Grid>
  </Grid>
);

export default BestTraderInfo;
