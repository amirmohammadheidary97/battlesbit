import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {HomeHeader} from './Leverage';

const meta: Meta<typeof HomeHeader> = {
  tags: ['autodocs'],
  component: HomeHeader,
};

export default meta;
type Story = StoryObj<typeof HomeHeader>;

export const HomeHeaderStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <HomeHeader current={50} total={100} usdtAmount={123} vsdAmount={12} />
    </Box>
  ),
};
