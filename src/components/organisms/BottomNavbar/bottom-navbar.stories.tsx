import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {BottomNavbar} from './BottomNavbar';

const meta: Meta<typeof BottomNavbar> = {
  tags: ['autodocs'],
  component: BottomNavbar,
};

export default meta;
type Story = StoryObj<typeof BottomNavbar>;

export const NavbarStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BottomNavbar />
    </Box>
  ),
};
