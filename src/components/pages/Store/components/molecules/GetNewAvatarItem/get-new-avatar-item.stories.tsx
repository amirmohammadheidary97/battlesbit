import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {LeverageItem} from './GetNewAvatarItem';

import leverageItemImg1 from '@/assets/img/icons/store/leverage 1.png';

const meta: Meta<typeof LeverageItem> = {
  tags: ['autodocs'],
  component: LeverageItem,
};

export default meta;
type Story = StoryObj<typeof LeverageItem>;

export const ChargeWalletItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LeverageItem
        amount={10}
        currency="VSD"
        iconUrl={leverageItemImg1}
        xpCuntent="up to"
        xpValue={50}
      />
    </Box>
  ),
};
