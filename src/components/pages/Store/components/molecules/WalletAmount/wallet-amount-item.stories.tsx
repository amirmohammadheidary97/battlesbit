import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {WalletAmountItem} from './WalletAmount';

const meta: Meta<typeof WalletAmountItem> = {
  tags: ['autodocs'],
  component: WalletAmountItem,
};

export default meta;
type Story = StoryObj<typeof WalletAmountItem>;

export const DetailAvatarItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <WalletAmountItem walletAmount={1000} />
    </Box>
  ),
};
