import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {BasicTimeUnits} from './BasicTimeUnits';

const meta: Meta<typeof BasicTimeUnits> = {
  tags: ['autodocs'],
  component: BasicTimeUnits,
};

export default meta;
type Story = StoryObj<typeof BasicTimeUnits>;

export const TimeSpentStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BasicTimeUnits time={11000004} />
    </Box>
  ),
};
