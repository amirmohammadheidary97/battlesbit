import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {OrderForm} from './OrderForm';

const meta: Meta<typeof OrderForm> = {
  tags: ['autodocs'],
  component: OrderForm,
};

export default meta;
type Story = StoryObj<typeof OrderForm>;

export const OrderFormStories: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        p={2}
        bgcolor={theme.palette.background.default}>
        <OrderForm assets={[]} />
      </Box>
    );
  },
};
