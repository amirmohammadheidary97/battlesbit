import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import GameHistory from './GameHistory';

const meta: Meta<typeof GameHistory> = {
  tags: ['autodocs'],
  component: GameHistory,
};

export default meta;
type Story = StoryObj<typeof GameHistory>;

export const GameHistoryStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GameHistory />
    </Box>
  ),
};
