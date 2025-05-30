import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {challangeInfoData} from '../../../utils/fakeData';

import LiveChallenges from './LiveChallenges';

const meta: Meta<typeof LiveChallenges> = {
  tags: ['autodocs'],
  component: LiveChallenges,
};

export default meta;
type Story = StoryObj<typeof LiveChallenges>;

export const LiveChallengestories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LiveChallenges challangeInfo={challangeInfoData} />
    </Box>
  ),
};
