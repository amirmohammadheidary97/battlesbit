import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import SwipableButton from './SwipableButton';

const meta: Meta<typeof SwipableButton> = {
  tags: ['autodocs'],
  component: SwipableButton,
};

export default meta;
type Story = StoryObj<typeof SwipableButton>;

export const SwipableButtonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <SwipableButton />
    </Box>
  ),
};
