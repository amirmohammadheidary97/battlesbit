import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {BalanceProfit} from './BalanceProfit';

const meta: Meta<typeof BalanceProfit> = {
  tags: ['autodocs'],
  component: BalanceProfit,
};

export default meta;
type Story = StoryObj<typeof BalanceProfit>;

export const BalanceProfitStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BalanceProfit role="balance" unit="USDT" value={2000} />
      <BalanceProfit role="profit" unit="USDT" value={2000} />
    </Box>
  ),
};
