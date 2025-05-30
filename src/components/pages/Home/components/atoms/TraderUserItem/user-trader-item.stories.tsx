import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import TraderUserItem from './TraderUserItem';

const meta: Meta<typeof TraderUserItem> = {
  tags: ['autodocs'],
  component: TraderUserItem,
};

export default meta;
type Story = StoryObj<typeof TraderUserItem>;

export const TraderUserItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <TraderUserItem
        user={{
          profileImage: '',
          userName: '',
          cup: 0,
        }}
      />
    </Box>
  ),
};
