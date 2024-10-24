import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {MoneyLabel} from './MoneyLabel';

const meta: Meta<typeof MoneyLabel> = {
  tags: ['autodocs'],
  component: MoneyLabel,
};

export default meta;
type Story = StoryObj<typeof MoneyLabel>;

export const MoneyLabelStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <MoneyLabel withCommaSeperator money={{amount: 10002256, unit: 'USDT'}} />
    </Box>
  ),
};
