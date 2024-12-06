import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ScrollableList from './ScrollableList';

const meta: Meta<typeof ScrollableList> = {
  tags: ['autodocs'],
  component: ScrollableList,
};

export default meta;
type Story = StoryObj<typeof ScrollableList>;

export const ScrollableListStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ScrollableList containerProps={{bgcolor: 'background.paper'}} />
    </Box>
  ),
};
