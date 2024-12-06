import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UserImage from './UserImage';

import Image1 from '@/assets/img/bg/users/1.png';

const meta: Meta<typeof UserImage> = {
  tags: ['autodocs'],
  component: UserImage,
};

export default meta;
type Story = StoryObj<typeof UserImage>;

export const UserImageStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserImage image={Image1} />
    </Box>
  ),
};
