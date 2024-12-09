import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {userInfoFakeData} from '../../../utils/fakeData';

import ProfileInfo from './ProfileInfo';

const meta: Meta<typeof ProfileInfo> = {
  tags: ['autodocs'],
  component: ProfileInfo,
};

export default meta;
type Story = StoryObj<typeof ProfileInfo>;

export const ProfileInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ProfileInfo userInfo={userInfoFakeData} />
    </Box>
  ),
};
