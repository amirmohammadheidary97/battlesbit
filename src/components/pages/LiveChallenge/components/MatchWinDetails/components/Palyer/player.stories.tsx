import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {Player} from './Player';

import fakeavatar from '@/assets/img/icons/avatars/avatar1.svg';

const meta: Meta<typeof Player> = {
  tags: ['autodocs'],
  component: Player,
};

export default meta;
type Story = StoryObj<typeof Player>;

export const PlayerStories: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        p={2}
        bgcolor={theme.palette.background.default}>
        <Player avatar={fakeavatar} isWinner level={52} name="You" size={120} />
        <Player avatar={fakeavatar} level={42} name="MAMAD" size={120} />
      </Box>
    );
  },
};
