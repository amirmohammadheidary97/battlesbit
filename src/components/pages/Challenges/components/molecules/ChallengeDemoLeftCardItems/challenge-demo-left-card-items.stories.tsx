import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeDemoLeftCardItems} from './ChallengeDemoLeftCardItems';

const meta: Meta<typeof ChallengeDemoLeftCardItems> = {
  tags: ['autodocs'],
  component: ChallengeDemoLeftCardItems,
};

export default meta;
type Story = StoryObj<typeof ChallengeDemoLeftCardItems>;

export const ChallengeDemoLeftCardItemsStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeDemoLeftCardItems date="2024/5/23" result="WON" />
    </Box>
  ),
};
