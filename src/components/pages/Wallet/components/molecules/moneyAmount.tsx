import {Box} from '@mui/material';

import {AmountContainer} from '../atoms/sliced-money-container';

import {numberWithCommas} from '@/utils/money-number-fromatter';

type Props = {
  amount: number;
  integerSize: string;
  floatSize: string;
  havePlus?: boolean;
};
const WalletBalanceAmount = ({
  amount,
  floatSize,
  integerSize,
  havePlus,
}: Props) => {
  const formattedMoney = numberWithCommas(amount);
  return (
    <Box sx={{textAlign: 'center'}}>
      {havePlus ? '+' : ''}
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
