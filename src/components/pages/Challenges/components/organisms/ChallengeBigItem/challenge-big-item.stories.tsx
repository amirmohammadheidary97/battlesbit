import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeBigItem} from './ChallengeBigItem';

const meta: Meta<typeof ChallengeBigItem> = {
  tags: ['autodocs'],
  component: ChallengeBigItem,
};

export default meta;
type Story = StoryObj<typeof ChallengeBigItem>;

export const ChallengeBigItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeBigItem />
    </Box>
  ),
};
