import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import BestTraderItem from './BestTraderItem';

const meta: Meta<typeof BestTraderItem> = {
  tags: ['autodocs'],
  component: BestTraderItem,
};

export default meta;
type Story = StoryObj<typeof BestTraderItem>;

export const BestTraderItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BestTraderItem
        trader={{
          user: {
            profileImage: '',
            userName: '',
            cup: 0,
          },
          pnl: 0,
          balance: 0,
          balancePercentage: 0,
        }}
      />
    </Box>
  ),
};
