import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {challangeInfoData} from '../../pages/Home/utils/fakeData';

import LiveChallengesItem from './LiveChallengesItem';

const meta: Meta<typeof LiveChallengesItem> = {
  tags: ['autodocs'],
  component: LiveChallengesItem,
};

export default meta;
type Story = StoryObj<typeof LiveChallengesItem>;

export const LiveChallengesItemtories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LiveChallengesItem
        customButtonOutline="contained"
        challangeInfo={challangeInfoData}
      />
    </Box>
  ),
};
