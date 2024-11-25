import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {GetNewAvatarItem} from './GetNewAvatarItem';

import monkeyItemImg1 from '@/assets/img/bg/monkey.png';

const meta: Meta<typeof GetNewAvatarItem> = {
  tags: ['autodocs'],
  component: GetNewAvatarItem,
};

export default meta;
type Story = StoryObj<typeof GetNewAvatarItem>;

export const ChargeWalletItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GetNewAvatarItem
        funds={1000}
        id={1}
        amount={10}
        currency="VSD"
        iconUrl={monkeyItemImg1}
      />
    </Box>
  ),
};
