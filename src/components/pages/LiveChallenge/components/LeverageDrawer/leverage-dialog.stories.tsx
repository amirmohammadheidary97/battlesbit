import {useState} from 'react';
import {Box, Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {LeverageDrawer} from './LeverageDrawer';

import {useDisclosure} from '@/hooks/custom/useDisclosure';

const meta: Meta<typeof LeverageDrawer> = {
  tags: ['autodocs'],
  component: LeverageDrawer,
};

export default meta;
type Story = StoryObj<typeof LeverageDrawer>;

export const LeverageDrawerStories: Story = {
  render: () => {
    const [leverage, setLeverage] = useState<number>(1);
    const {isOpen, onToggle} = useDisclosure();
    return (
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          Toggle
        </Button>
        <LeverageDrawer
          {...{
            leverage,
            onClose: onToggle,
            open: isOpen,
            setLeverage,
          }}
        />
      </Box>
    );
  },
};
