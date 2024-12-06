import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {StatusItem} from './StatusItem';

const meta: Meta<typeof StatusItem> = {
  tags: ['autodocs'],
  component: StatusItem,
};

export default meta;
type Story = StoryObj<typeof StatusItem>;

export const StatusItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <StatusItem status="PREMIUM" />
    </Box>
  ),
};
