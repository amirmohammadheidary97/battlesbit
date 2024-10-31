import {Box} from '@mui/material';

import {AmountContainer} from '../atoms/sliced-money-container';

import {numberWithCommas} from '@/utils/money-number-fromatter';

type Props = {
  amount: number;
  integerSize: string;
  floatSize: string;
  isTransaction?: boolean;
};
const WalletBalanceAmount = ({
  amount,
  floatSize,
  integerSize,
  isTransaction,
}: Props) => {
  const formattedMoney = numberWithCommas(amount);
  return (
    <Box
      sx={{
        textAlign: 'center',
        fontWeight: isTransaction ? '900' : '400',
        fontFamily: isTransaction ? 'Nunito Sans' : 'Alfa Slab One',
      }}>
      {isTransaction ? '+' : ''}
      {/* integer part of money */}
      <AmountContainer fontSize={integerSize}>
        ${formattedMoney.split('.')[0]}
      </AmountContainer>
      {/* float part of money */}
      <AmountContainer fontSize={floatSize}>
        .{formattedMoney.split('.')[1]}
      </AmountContainer>
    </Box>
  );
};

export default WalletBalanceAmount;
