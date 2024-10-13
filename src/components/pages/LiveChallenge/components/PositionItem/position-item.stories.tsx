import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PositionItem} from './PositionItem';

const meta: Meta<typeof PositionItem> = {
  tags: ['autodocs'],
  component: PositionItem,
};

export default meta;
type Story = StoryObj<typeof PositionItem>;

export const PositionItemStories: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}
        p={2}
        bgcolor={theme.palette.background.default}>
        {PositionsFakeData.map((p, i) => (
          <PositionItem key={p.assetName + i} {...(p as any)} />
        ))}
      </Box>
    );
  },
};

export const PositionsFakeData = [
  {
    assetName: 'BTC/USDT',
    type: 'openOrder',
    otherProps: [
      {
        title: 'Entry Price (USDT)',
        value: 13000,
      },
      {
        title: 'Close Price (USDT)',
        value: 13000,
      },
      {
        title: 'Max Held (BTC)',
        value: 13000,
      },
      {
        title: 'Close qty. (BTC)',
        value: 0.0239,
      },
      {
        title: 'Time Open',
        value: '07/29-21:21',
      },
      {
        title: 'Time Close',
        value: '07/29-23:01',
      },
    ],
    chips: {
      side: 'buy',
      leverage: 34,
      others: ['Tp', 'Sl', 'Cross'],
    },
    openOrderProps: {
      openingTime: Date.now(),
      price: 764.45,
      triggerPrice: 64.45,
    },
  },
  {
    assetName: 'BTC/USDT',
    type: 'history',
    otherProps: [
      {
        title: 'Guaranteed TP',
        value: '172.123400000',
      },
      {
        title: 'Price',
        value: '171.000',
      },
    ],
    chips: {
      side: 'buy',
      leverage: 12,
      others: ['Tp', 'Sl', 'Isolate'],
    },
    historyProps: {
      pnl: 45,
      positionPnl: 532,
    },
  },
  {
    assetName: 'BTC/USDT',
    type: 'position',
    otherProps: [
      {
        title: 'Positions (USDT)',
        value: 13492000,
      },
      {
        title: 'Margin (USDT)',
        value: 20049483,
      },
      {
        title: 'Margin Rate',
        value: '3.58%',
      },
    ],
    chips: {
      side: 'sell',
      leverage: 34,
      others: ['Tp', 'Sl', 'Cross'],
    },
    positionProps: {
      pnl: 34.45,
      unrealizedPnl: 173.23482,
    },
  },
];
