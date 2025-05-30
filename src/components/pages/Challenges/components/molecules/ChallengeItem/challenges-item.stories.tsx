import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {challengesItemList} from '../../../utils/fakeData';

import ChallengeItem from './ChallengeItem';

const meta: Meta<typeof ChallengeItem> = {
  tags: ['autodocs'],
  component: ChallengeItem,
};

export default meta;
type Story = StoryObj<typeof ChallengeItem>;

export const ChallengeItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeItem challenge={challengesItemList[0]} href={'/challenges'} />
    </Box>
  ),
};
