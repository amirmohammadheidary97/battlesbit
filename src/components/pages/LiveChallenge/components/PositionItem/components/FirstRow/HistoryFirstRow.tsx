import Grid from '@mui/material/Grid2';

import {PositionTitleValue} from '../PositionTitleValue/PositionTitleValue';

type Props = {
  positionPnl: number | string;
  pnl: number | string;
};

export const HistoryFirstRow = ({pnl, positionPnl}: Props) => (
  <Grid container>
    <Grid>
      <PositionTitleValue
        title="Position PnL (USDT)"
        type="pnl"
        value={positionPnl}
        alignItems="flex-start"
        valueVariant="h6"
      />
    </Grid>
    <Grid offset={'auto'}>
      <PositionTitleValue
        title="Pnl%"
        type="pnl"
        value={pnl}
        alignItems="flex-end"
        valueVariant="h6"
      />
    </Grid>
  </Grid>
);
