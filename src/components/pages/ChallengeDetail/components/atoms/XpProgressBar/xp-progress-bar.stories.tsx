import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import XpProgressBar from './XpProgressBar';

const meta: Meta<typeof XpProgressBar> = {
  tags: ['autodocs'],
  component: XpProgressBar,
};

export default meta;
type Story = StoryObj<typeof XpProgressBar>;

export const XpProgressBarStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <XpProgressBar xp={100} />
    </Box>
  ),
};
