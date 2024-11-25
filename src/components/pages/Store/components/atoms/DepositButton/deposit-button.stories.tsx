import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {DepositButton} from './DepositButton';

const meta: Meta<typeof DepositButton> = {
  tags: ['autodocs'],
  component: DepositButton,
};

export default meta;
type Story = StoryObj<typeof DepositButton>;

export const DepositButtonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <DepositButton onClick={() => {}} />
    </Box>
  ),
};
