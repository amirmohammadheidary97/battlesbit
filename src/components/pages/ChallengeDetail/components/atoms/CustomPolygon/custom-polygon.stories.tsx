import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import CustomPolygon from './CustomPolygon';

const meta: Meta<typeof CustomPolygon> = {
  tags: ['autodocs'],
  component: CustomPolygon,
};

export default meta;
type Story = StoryObj<typeof CustomPolygon>;

export const CustomPolygonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <CustomPolygon
        width={121}
        height={81}
        fill="#25272F"
        position="toRight"
      />
    </Box>
  ),
};
