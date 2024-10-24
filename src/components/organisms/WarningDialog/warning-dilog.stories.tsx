import {Box, Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {WarningDialog} from './WarningDialog';

import {useDisclosure} from '@/hooks/custom/useDisclosure';

const meta: Meta<typeof WarningDialog> = {
  tags: ['autodocs'],
  component: WarningDialog,
};

export default meta;
type Story = StoryObj<typeof WarningDialog>;

export const WarningDialogStories: Story = {
  render: () => {
    //
    const {isOpen, onToggle} = useDisclosure();
    //
    return (
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Button onClick={onToggle}>Toggle</Button>
        <WarningDialog
          onClose={onToggle}
          open={isOpen}
          description="Are You Sure To Reverse This Position?"
          onConfirm={() => {
            console.log('confirm');
          }}
        />
      </Box>
    );
  },
};
