import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ChallengeItemInfo from './ChallengeItemInfo';

const meta: Meta<typeof ChallengeItemInfo> = {
  tags: ['autodocs'],
  component: ChallengeItemInfo,
};

export default meta;
type Story = StoryObj<typeof ChallengeItemInfo>;

export const ChallengeItemInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeItemInfo
        title="Challenge Item Info"
        time="10:00"
        rewards={100}
        xp={100}
        entry={100}
        id={1}
      />
    </Box>
  ),
};
