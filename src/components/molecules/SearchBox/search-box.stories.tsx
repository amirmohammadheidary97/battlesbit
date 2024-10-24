import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {SearchBox} from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  tags: ['autodocs'],
  component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const SearchBoxStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <SearchBox size={12} />
    </Box>
  ),
};
