import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ViewBalance from './ViewBalance';

const meta: Meta<typeof ViewBalance> = {
  tags: ['autodocs'],
  component: ViewBalance,
};

export default meta;
type Story = StoryObj<typeof ViewBalance>;

export const ViewBalanceStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ViewBalance handleShowViewBalance={() => {}} iShowBalance={false} />
    </Box>
  ),
};
