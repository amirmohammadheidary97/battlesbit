import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PositionSide} from './PositionSide';

const meta: Meta<typeof PositionSide> = {
  tags: ['autodocs'],
  component: PositionSide,
};

export default meta;
type Story = StoryObj<typeof PositionSide>;

export const PositionSideStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <PositionSide type="buy" />
      <PositionSide type="sell" />
    </Box>
  ),
};
