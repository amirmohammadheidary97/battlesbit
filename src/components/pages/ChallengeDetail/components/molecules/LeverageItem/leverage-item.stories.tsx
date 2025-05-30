import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {leverages} from '../../../utils/fakeData';

import LeverageItem from './LeverageItem';

const meta: Meta<typeof LeverageItem> = {
  tags: ['autodocs'],
  component: LeverageItem,
};

export default meta;
type Story = StoryObj<typeof LeverageItem>;

export const LeverageItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LeverageItem leverage={leverages[0]} />
    </Box>
  ),
};
