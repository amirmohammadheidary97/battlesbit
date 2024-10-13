import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {CustomCircularProgress} from './CustomCircularProgress';

const meta: Meta<typeof CustomCircularProgress> = {
  tags: ['autodocs'],
  component: CustomCircularProgress,
};

export default meta;
type Story = StoryObj<typeof CustomCircularProgress>;

export const CustomCircularProgressStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2} p={10}>
      <CustomCircularProgress
        size={69}
        strokeW={4}
        trackColor="#ccc"
        indicatorColor="#fc01f2"
        percentage={25}
        label={<Box sx={{color: '#fff'}}>20:19</Box>}
      />
    </Box>
  ),
};
