import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {Players} from './Players';

const meta: Meta<typeof Players> = {
  tags: ['autodocs'],
  component: Players,
};

export default meta;
type Story = StoryObj<typeof Players>;

export const PlayersStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Players />
    </Box>
  ),
};
