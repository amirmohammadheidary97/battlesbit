import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChargeWalletItem} from './ChargeWalletItem';

import ChargeWalletItemImg1 from '@/assets/img/icons/store/charge-item-1.png';

const meta: Meta<typeof ChargeWalletItem> = {
  tags: ['autodocs'],
  component: ChargeWalletItem,
};

export default meta;
type Story = StoryObj<typeof ChargeWalletItem>;

export const ChargeWalletItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChargeWalletItem
        id={1}
        amount={10}
        amountTwo={0.99}
        currency="USDT"
        currencyTwo="VSD"
        iconUrl={ChargeWalletItemImg1}
      />
    </Box>
  ),
};
