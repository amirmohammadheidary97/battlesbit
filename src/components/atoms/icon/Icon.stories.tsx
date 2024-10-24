import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {CustomIcon} from './CustomIcon';

const meta: Meta<typeof CustomIcon> = {
  tags: ['autodocs'],
  component: CustomIcon,
};

export default meta;
type Story = StoryObj<typeof CustomIcon>;

export const NavigationIcons: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Box>
        <CustomIcon type="IconAI" />
      </Box>
    </Box>
  ),
};
