import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import BestTraders from './BestTraders';

const meta: Meta<typeof BestTraders> = {
  tags: ['autodocs'],
  component: BestTraders,
};

export default meta;
type Story = StoryObj<typeof BestTraders>;

export const BestTradersStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BestTraders />
    </Box>
  ),
};
