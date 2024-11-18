import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChargeWallet} from './ChargeWallet';

const meta: Meta<typeof ChargeWallet> = {
  tags: ['autodocs'],
  component: ChargeWallet,
};

export default meta;
type Story = StoryObj<typeof ChargeWallet>;

export const ChargeWalletStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChargeWallet
        chargeWalletItems={[]}
        description="lorem lorem lorem lorem lorem lorem lorem lorem"
        title="charge your wallet"
      />
    </Box>
  ),
};
