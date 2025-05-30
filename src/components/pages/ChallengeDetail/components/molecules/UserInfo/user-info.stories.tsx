import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UserInfo from './UserInfo';

const meta: Meta<typeof UserInfo> = {
  tags: ['autodocs'],
  component: UserInfo,
};

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const UserInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserInfo image={''} name={''} level={0} xp={0} />
    </Box>
  ),
};
