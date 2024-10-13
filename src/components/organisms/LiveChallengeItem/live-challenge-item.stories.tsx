import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {LiveChallengeItem} from './LiveChallengeItem';

const meta: Meta<typeof LiveChallengeItem> = {
  tags: ['autodocs'],
  component: LiveChallengeItem,
};

export default meta;
type Story = StoryObj<typeof LiveChallengeItem>;

export const LiveChallengeItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LiveChallengeItem />
    </Box>
  ),
};
