import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {NextPrize} from './NextPrize';

const meta: Meta<typeof NextPrize> = {
  tags: ['autodocs'],
  component: NextPrize,
};

export default meta;
type Story = StoryObj<typeof NextPrize>;

export const NextPrizeStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <NextPrize />
    </Box>
  ),
};
