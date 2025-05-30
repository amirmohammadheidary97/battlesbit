import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ChallengesContainer from './ChallengesContainer';

const meta: Meta<typeof ChallengesContainer> = {
  tags: ['autodocs'],
  component: ChallengesContainer,
};

export default meta;
type Story = StoryObj<typeof ChallengesContainer>;

export const ChallengesContainerStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengesContainer />
    </Box>
  ),
};
