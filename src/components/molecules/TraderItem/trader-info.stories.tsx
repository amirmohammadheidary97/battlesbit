import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import TraderItem from './TraderItem';

const meta: Meta<typeof TraderItem> = {
  tags: ['autodocs'],
  component: TraderItem,
};

export default meta;
type Story = StoryObj<typeof TraderItem>;

export const TraderItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <TraderItem
        userName="John Doe"
        balance={1000}
        profileImage="https://via.placeholder.com/150"
        id={1}
      />
    </Box>
  ),
};
