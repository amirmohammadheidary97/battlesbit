import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import LastChallenges from './LastChallenges';

const meta: Meta<typeof LastChallenges> = {
  tags: ['autodocs'],
  component: LastChallenges,
};

export default meta;
type Story = StoryObj<typeof LastChallenges>;

export const LastChallengesStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LastChallenges />
    </Box>
  ),
};
