// import {AnimatedCounter} from 'react-animated-counter';
// import SlotCounter from 'react-slot-counter';
import type {CSSProperties} from 'react';
import AnimatedNumber from 'react-awesome-animated-number';
import type {SxProps, Theme} from '@mui/material';
import {Box} from '@mui/material';

import 'react-awesome-animated-number/dist/index.css';

import type {money} from '@/types/common';
import {numberWithCommas} from '@/utils/money-number-fromatter';

type Props = {
  money: money;
  withCommaSeperator?: boolean;
  containerSX?: SxProps<Theme>;
  moneyAmountSX?: SxProps<Theme>;
  moneyUnitSX?: SxProps<Theme>;
  animated?: boolean;
};

export const MoneyLabel = ({
  money,
  withCommaSeperator = true,
  animated = false,
  containerSX = {},
  moneyAmountSX = {},
  moneyUnitSX = {},
}: Props) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'baseline',
      ...containerSX,
    }}>
    <Box
      sx={{
        color: 'text1',
        ...moneyAmountSX,
      }}>
      {animated ? (
        <AnimatedNumber
          value={money.amount}
          hasComma={true}
          size={
            (moneyAmountSX as CSSProperties)?.fontSize
              ? Number((moneyAmountSX as CSSProperties).fontSize as string)
              : 18
          }
          // style={moneyAmountSX.styles}
          duration={500}
        />
      ) : withCommaSeperator ? (
        numberWithCommas(money.amount)
      ) : (
        money.amount
      )}
    </Box>
    <Box
      sx={{
        color: 'text1',
        ...moneyUnitSX,
      }}>
      {money.unit}
    </Box>
  </Box>
);
