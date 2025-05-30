//@ts-nocheck
import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import CustomDialog from './CustomDialog';

const meta: Meta<typeof CustomDialog> = {
  tags: ['autodocs'],
  component: CustomDialog,
};

export default meta;
type Story = StoryObj<typeof CustomDialog>;

export const CustomDialogStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <CustomDialog />
    </Box>
  ),
};
