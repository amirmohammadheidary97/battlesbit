import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {DetailAvatarItem} from './WalletAmount';

import MonkeyImg from '@/assets/img/bg/monkey.png';

const meta: Meta<typeof DetailAvatarItem> = {
  tags: ['autodocs'],
  component: DetailAvatarItem,
};

export default meta;
type Story = StoryObj<typeof DetailAvatarItem>;

export const DetailAvatarItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <DetailAvatarItem
        icon={MonkeyImg}
        currency="VSD"
        amount={10}
        onClick={() => {}}
        isFunds={false}
      />
    </Box>
  ),
};
