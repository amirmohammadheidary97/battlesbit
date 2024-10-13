import Grid from '@mui/material/Grid2';

import {PositionTitleValue} from '../PositionTitleValue/PositionTitleValue';

type Props = {
  unrealizedPnl: number | string;
  pnl: number | string;
};

export const PositionFirstRow = ({pnl, unrealizedPnl}: Props) => (
  <Grid container>
    <Grid>
      <PositionTitleValue
        title="Unrealized PnL (USDT)"
        type="pnl"
        value={unrealizedPnl}
        alignItems="flex-start"
        valueVariant="h6"
      />
    </Grid>
    <Grid offset={'auto'}>
      <PositionTitleValue
        title="Pnl%"
        type="pnl"
        value={pnl}
        alignItems="flex-start"
        valueVariant="h6"
      />
    </Grid>
  </Grid>
);
