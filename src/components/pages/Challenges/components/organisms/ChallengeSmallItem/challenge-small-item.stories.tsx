import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeSmallItem} from './ChallengeSmallItem';

const meta: Meta<typeof ChallengeSmallItem> = {
  tags: ['autodocs'],
  component: ChallengeSmallItem,
};

export default meta;
type Story = StoryObj<typeof ChallengeSmallItem>;

export const ChallengeSmallItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeSmallItem />
    </Box>
  ),
};
