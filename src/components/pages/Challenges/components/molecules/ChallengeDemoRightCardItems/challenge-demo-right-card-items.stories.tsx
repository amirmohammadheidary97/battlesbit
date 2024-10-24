import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeDemoRightCardItems} from './ChallengeDemoRightCardItems';

const meta: Meta<typeof ChallengeDemoRightCardItems> = {
  tags: ['autodocs'],
  component: ChallengeDemoRightCardItems,
};

export default meta;
type Story = StoryObj<typeof ChallengeDemoRightCardItems>;

export const ChallengeDemoRightCardItemsStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeDemoRightCardItems />
    </Box>
  ),
};
