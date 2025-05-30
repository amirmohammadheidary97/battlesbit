import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import LastChallangeItem from './LastChallengeItem';

const meta: Meta<typeof LastChallangeItem> = {
  tags: ['autodocs'],
  component: LastChallangeItem,
};

export default meta;
type Story = StoryObj<typeof LastChallangeItem>;

export const LastChallangeItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LastChallangeItem balance={10} />
    </Box>
  ),
};
