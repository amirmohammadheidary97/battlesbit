import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {UserItem} from './UserItem';

const meta: Meta<typeof UserItem> = {
  tags: ['autodocs'],
  component: UserItem,
};

export default meta;
type Story = StoryObj<typeof UserItem>;

export const UserItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserItem
        amount={10}
        avatar=""
        currency="VSD"
        id={1}
        level={12}
        userName="Mohammad"
      />
    </Box>
  ),
};
