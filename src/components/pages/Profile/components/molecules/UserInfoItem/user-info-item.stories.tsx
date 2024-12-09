import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UserInfoItem from './UserInfoItem';

const meta: Meta<typeof UserInfoItem> = {
  tags: ['autodocs'],
  component: UserInfoItem,
};

export default meta;
type Story = StoryObj<typeof UserInfoItem>;

export const UserInfoItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserInfoItem iconUrl="" title="" />
    </Box>
  ),
};
