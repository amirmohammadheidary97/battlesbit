import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PlayerLevel} from './PlayerLevel';

const meta: Meta<typeof PlayerLevel> = {
  tags: ['autodocs'],
  component: PlayerLevel,
};

export default meta;
type Story = StoryObj<typeof PlayerLevel>;

export const PlayerLevelStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <PlayerLevel level={10} />
    </Box>
  ),
};
