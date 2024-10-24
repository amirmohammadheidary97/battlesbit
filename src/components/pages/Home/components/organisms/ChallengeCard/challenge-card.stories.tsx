import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeCard} from './ChallengeCard';

const meta: Meta<typeof ChallengeCard> = {
  tags: ['autodocs'],
  component: ChallengeCard,
};

export default meta;
type Story = StoryObj<typeof ChallengeCard>;

export const ChallengeCardStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeCard matchState="Winning" minutesLeft={10} secondsLeft={56} />
    </Box>
  ),
};
