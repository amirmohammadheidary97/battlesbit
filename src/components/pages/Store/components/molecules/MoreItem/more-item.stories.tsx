import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {MoreItem} from './MoreItem';

const meta: Meta<typeof MoreItem> = {
  tags: ['autodocs'],
  component: MoreItem,
};

export default meta;
type Story = StoryObj<typeof MoreItem>;

export const MoreItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <MoreItem navigateToDetail={() => {}} />
    </Box>
  ),
};
