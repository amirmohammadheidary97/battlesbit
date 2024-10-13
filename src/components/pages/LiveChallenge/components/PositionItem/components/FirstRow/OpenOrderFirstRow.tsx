import Grid from '@mui/material/Grid2';

import {PositionTitleValue} from '../PositionTitleValue/PositionTitleValue';

type Props = {
  triggerPrice: number | string;
  price: number | string;
};
export const OpenOrderFirstRow = ({price, triggerPrice}: Props) => (
  <Grid container>
    <Grid>
      <PositionTitleValue
        title="Trigger Price"
        type="price"
        value={triggerPrice}
        alignItems="flex-start"
        valueVariant="h6"
      />
    </Grid>
    <Grid offset={'auto'}>
      <PositionTitleValue
        title="Price"
        type="price"
        value={price}
        alignItems="flex-start"
        valueVariant="h6"
      />
    </Grid>
  </Grid>
);
