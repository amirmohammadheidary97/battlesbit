import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import OpenGames from './OpenGames';

const meta: Meta<typeof OpenGames> = {
  tags: ['autodocs'],
  component: OpenGames,
};

export default meta;
type Story = StoryObj<typeof OpenGames>;

export const OpenGamesStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <OpenGames />
    </Box>
  ),
};
