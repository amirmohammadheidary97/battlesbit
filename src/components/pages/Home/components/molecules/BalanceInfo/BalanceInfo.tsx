import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {CustomIcon} from '@/components/atoms/icon';
import Pricing from '@/components/atoms/Pricing';
import type {PriceFormat} from '@/types/props/price';

type Props = {
  currency: PriceFormat;
  balance: number;
  convertedTomansBalance: number;
  handleShowViewBalance: () => void;
  iShowBalance: boolean;
};

const BalanceInfo = ({
  balance,
  convertedTomansBalance,
  currency,
  iShowBalance,
  handleShowViewBalance,
}: Props) => (
  <Grid
    container
    size={12}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}>
    <Grid
      onClick={handleShowViewBalance}
      mb={1}
      display={'flex'}
      alignItems={'center'}>
      <Typography
        variant="body2"
        fontWeight={400}
        sx={{
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}>
        Balance
      </Typography>
      <Grid height={12} width={12} display={'flex'} alignItems={'start'} ml={1}>
        {iShowBalance ? (
          <CustomIcon type="closedEyes" height={14} width={14} />
        ) : (
          <Grid mt={0.1}>
            <CustomIcon type="openEyes" height={14} width={14} />
          </Grid>
        )}
      </Grid>
    </Grid>
    <Grid>
      <Pricing
        iShowBalance={iShowBalance}
        formatPrice={currency}
        amount={balance}
        mainTextProps={{
          color: 'textPrimary',
          fontWeight: 500,
          fontSize: '30px',
        }}
        decimalTextProps={{
          color: 'textPrimary',
          fontSize: '18px',
          fontWeight: 300,
          sx: {
            mt: 0.6,
          },
        }}
        symbolTextProps={{
          color: 'textPrimary',
          fontSize: '13px',
          fontWeight: 500,
          sx: {
            mt: 0.6,
          },
        }}
      />
    </Grid>
    <Grid display={'flex'} alignItems={'center'}>
      <Typography
        variant="caption"
        color="textSecondary"
        fontSize={'12px'}
        fontWeight={500}
        mr={0.5}>
        ≈
      </Typography>
      <Pricing
        iShowBalance={iShowBalance}
        formatPrice={'IRR'}
        amount={convertedTomansBalance}
        mainTextProps={{
          color: 'textSecondary',
          fontWeight: 500,
          fontSize: '12px',
          variant: 'caption',
        }}
        symbolTextProps={{
          color: 'textSecondary',
          fontWeight: 500,
          fontSize: '12px',
          variant: 'caption',
        }}
      />
    </Grid>
  </Grid>
);

export default BalanceInfo;
