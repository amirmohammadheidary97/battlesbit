import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import DescriptionsChallenge from './DescriptionsChallenge';

const meta: Meta<typeof DescriptionsChallenge> = {
  tags: ['autodocs'],
  component: DescriptionsChallenge,
};

export default meta;
type Story = StoryObj<typeof DescriptionsChallenge>;

export const DescriptionsChallengeStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <DescriptionsChallenge description="This is a description" />
    </Box>
  ),
};
