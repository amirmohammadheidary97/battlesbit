import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import {ConfirmationItem} from './ConfirmationItem';

import MonkeyImg from '@/assets/img/bg/monkey.png';

const meta: Meta<typeof ConfirmationItem> = {
  tags: ['autodocs'],
  component: ConfirmationItem,
};

export default meta;
type Story = StoryObj<typeof ConfirmationItem>;

export const ConfirmationItemStories: Story = {
  render: () => (
    <Grid size={12} padding={'0px 20px'}>
      <ConfirmationItem
        amount2={310}
        currency2="USDT"
        amount={10}
        currency={'VSD'}
        icon={MonkeyImg}
        type="Avatar"
      />
    </Grid>
  ),
};
