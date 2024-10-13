import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {BackwardTitle} from './BackwardTitle';

const meta: Meta<typeof BackwardTitle> = {
  tags: ['autodocs'],
  component: BackwardTitle,
};

export default meta;
type Story = StoryObj<typeof BackwardTitle>;

export const BackwardTitleStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BackwardTitle title="Test" />
    </Box>
  ),
};
