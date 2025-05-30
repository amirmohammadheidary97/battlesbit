import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UserAmount from './UserAmount';

const meta: Meta<typeof UserAmount> = {
  tags: ['autodocs'],
  component: UserAmount,
};

export default meta;
type Story = StoryObj<typeof UserAmount>;

export const UserAmountStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <UserAmount amount={100} currency={'USD'} typeIcon={'backMain'} />
    </Box>
  ),
};
