import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import Challenges from './Challenges';

const meta: Meta<typeof Challenges> = {
  tags: ['autodocs'],
  component: Challenges,
};

export default meta;
type Story = StoryObj<typeof Challenges>;

export const ChallengesStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Challenges />
    </Box>
  ),
};
