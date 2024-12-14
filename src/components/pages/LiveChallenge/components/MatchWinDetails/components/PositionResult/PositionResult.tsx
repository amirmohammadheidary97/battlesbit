import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import btcIcon from '@/assets/img/icons/general/bitcoin.png';
import type {Asset} from '@/gql-codegen/generated';
import {GameMatchPositionSide} from '@/gql-codegen/generated';

export type PositionResultProps = {
  asset: Asset;
  side: GameMatchPositionSide;
  pnlAmount: number;
};

export const PositionResult = ({
  asset,
  pnlAmount,
  side,
}: PositionResultProps) => (
  <Grid
    container
    size={12}
    justifyContent={'space-between'}
    alignItems={'center'}
    spacing={0.5}>
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        img: {
          width: '1.5rem',
          aspectRatio: 1,
        },
      }}>
      <img src={asset.iconUrl ?? btcIcon} />
      <Typography variant="caption" textTransform={'uppercase'}>
        {asset.name}
      </Typography>
    </Grid>
    {/**/}
    <Grid>
      <Typography variant="caption" color={pnlAmount > 0 ? 'success' : 'error'}>
        {side === GameMatchPositionSide.Buy ? 'Buy' : 'Sell'}
      </Typography>
    </Grid>
    {/**/}
    <Grid>
      <Typography variant="caption" color={pnlAmount > 0 ? 'success' : 'error'}>
        {`${pnlAmount >= 0 ? '+' : ''}${pnlAmount}$ ${pnlAmount >= 0 ? 'Profit' : 'Lost'}`}
      </Typography>
    </Grid>
  </Grid>
);
