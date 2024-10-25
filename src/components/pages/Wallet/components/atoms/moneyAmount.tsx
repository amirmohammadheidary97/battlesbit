import {Box, Typography} from '@mui/material';

import {numberWithCommas} from '@/utils/money-number-fromatter';

const WalletBalanceAmount = ({amount}: {amount: number}) => {
  const formattedMoney = numberWithCommas(amount);
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography
        component={'span'}
        sx={{
          font: '400 48px Alfa Slab One',
        }}>
        ${formattedMoney.split('.')[0]}
      </Typography>
      <Typography
        sx={{
          font: '400 28px Alfa Slab One',
        }}
        component={'span'}>
        .{formattedMoney.split('.')[1]}
      </Typography>
    </Box>
  );
};

export default WalletBalanceAmount;
