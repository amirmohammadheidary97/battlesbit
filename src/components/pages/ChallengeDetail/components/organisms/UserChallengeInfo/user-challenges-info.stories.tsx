import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UserChallengeInfo from './UserChallengeInfo';

const meta: Meta<typeof UserChallengeInfo> = {
  tags: ['autodocs'],
  component: UserChallengeInfo,
};

export default meta;
type Story = StoryObj<typeof UserChallengeInfo>;

export const UserChallengeInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserChallengeInfo />
    </Box>
  ),
};
