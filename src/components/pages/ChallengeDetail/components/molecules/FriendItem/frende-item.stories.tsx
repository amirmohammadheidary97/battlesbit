import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import FriendItem from './FriendItem';

const meta: Meta<typeof FriendItem> = {
  tags: ['autodocs'],
  component: FriendItem,
};

export default meta;
type Story = StoryObj<typeof FriendItem>;

export const FriendItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <FriendItem
        id={1}
        name="Alex"
        isOnline={true}
        selectedId={1}
        setSelectedId={() => {}}
      />
    </Box>
  ),
};
