import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {TimeAgo} from './TimeAgo';

const meta: Meta<typeof TimeAgo> = {
  tags: ['autodocs'],
  component: TimeAgo,
};

export default meta;
type Story = StoryObj<typeof TimeAgo>;

export const NavigationIcons: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <TimeAgo time={Date.now()} />
      <TimeAgo time={Date.now() - 60000} />
      <TimeAgo time={Date.now() - 6000000} />
      <TimeAgo time={Date.now() - 100000000} />
      <TimeAgo time={Date.now() - 1000000000} />
    </Box>
  ),
};
