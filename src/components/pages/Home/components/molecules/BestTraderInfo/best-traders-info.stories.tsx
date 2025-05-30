import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import BestTraderInfo from './BestTraderInfo';

const meta: Meta<typeof BestTraderInfo> = {
  tags: ['autodocs'],
  component: BestTraderInfo,
};

export default meta;
type Story = StoryObj<typeof BestTraderInfo>;

export const BestTraderInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BestTraderInfo
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
