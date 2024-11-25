import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {leverageList} from '../../../utils/fakeData';

import {LeverageDetail} from './LeverageDetail';

const meta: Meta<typeof LeverageDetail> = {
  tags: ['autodocs'],
  component: LeverageDetail,
};

export default meta;
type Story = StoryObj<typeof LeverageDetail>;

export const LeverageDetailStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LeverageDetail leverageInfo={leverageList[0]} />
    </Box>
  ),
};
