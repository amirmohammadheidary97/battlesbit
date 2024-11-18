import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {GetNewAvatars} from './GetNewAvatars';

const meta: Meta<typeof GetNewAvatars> = {
  tags: ['autodocs'],
  component: GetNewAvatars,
};

export default meta;
type Story = StoryObj<typeof GetNewAvatars>;

export const GetNewAvatarsStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GetNewAvatars
        description="You can change your avatar and nickname"
        getNewAvatars={[]}
        title="Get new Avatars"
      />
    </Box>
  ),
};
