import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PackageItem} from './PackageItem';

import PackageItemImg1 from '@/assets/img/icons/store/packagesimg.png';

const meta: Meta<typeof PackageItem> = {
  tags: ['autodocs'],
  component: PackageItem,
};

export default meta;
type Story = StoryObj<typeof PackageItem>;

export const PackageItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <PackageItem
        id={1}
        amount={10}
        currency="USDT"
        img={PackageItemImg1}
        character="3"
        leverage="8X"
        status="PREMIUM"
        title="Crazy box"
      />
    </Box>
  ),
};
