import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {chargeWalletItemsList} from '../../../utils/fakeData';

import {ChargeWalletDetail} from './ChargeWalletDetail';

const meta: Meta<typeof ChargeWalletDetail> = {
  tags: ['autodocs'],
  component: ChargeWalletDetail,
};

export default meta;
type Story = StoryObj<typeof ChargeWalletDetail>;

export const ChargeWalletDetailStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChargeWalletDetail chargeWalletInfo={chargeWalletItemsList[0]} />
    </Box>
  ),
};
