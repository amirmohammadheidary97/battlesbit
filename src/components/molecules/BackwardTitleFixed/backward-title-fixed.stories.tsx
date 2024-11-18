import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {BackwardTitleFixed} from './BackwardTitleFixed';

const meta: Meta<typeof BackwardTitleFixed> = {
  tags: ['autodocs'],
  component: BackwardTitleFixed,
};

export default meta;
type Story = StoryObj<typeof BackwardTitleFixed>;

export const BackwardTitleFixedStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BackwardTitleFixed title="Test" />
    </Box>
  ),
};
