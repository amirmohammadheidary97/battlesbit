import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import BackwardActionIcon from './BackwardActionIcon';

const meta: Meta<typeof BackwardActionIcon> = {
  tags: ['autodocs'],
  component: BackwardActionIcon,
};

export default meta;
type Story = StoryObj<typeof BackwardActionIcon>;

export const BackwardActionIconStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BackwardActionIcon iconType="arrow-up" href="/" />
    </Box>
  ),
};
