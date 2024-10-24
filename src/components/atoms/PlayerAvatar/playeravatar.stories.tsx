import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PlayerAvatar} from './PlayerAvatar';

import avatar from '@/assets/img/loadingmatch.jpeg';

const meta: Meta<typeof PlayerAvatar> = {
  tags: ['autodocs'],
  component: PlayerAvatar,
};

export default meta;
type Story = StoryObj<typeof PlayerAvatar>;

export const PlayerAvatarStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <PlayerAvatar img={avatar} dir="ltr" />
    </Box>
  ),
};
