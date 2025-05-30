import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ChallangeInfo from './ChallangeInfo';

const meta: Meta<typeof ChallangeInfo> = {
  tags: ['autodocs'],
  component: ChallangeInfo,
};

export default meta;
type Story = StoryObj<typeof ChallangeInfo>;

export const ChallangeInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallangeInfo title="Challange Title" balance="10" time="23:00" />
    </Box>
  ),
};
