import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeDemoResultCard} from './ChallengeDemoResultCard';

const meta: Meta<typeof ChallengeDemoResultCard> = {
  tags: ['autodocs'],
  component: ChallengeDemoResultCard,
};

export default meta;
type Story = StoryObj<typeof ChallengeDemoResultCard>;

export const ChallengeDemoResultCardStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeDemoResultCard challengeDate="2024/5/23" result="WON" />
    </Box>
  ),
};
