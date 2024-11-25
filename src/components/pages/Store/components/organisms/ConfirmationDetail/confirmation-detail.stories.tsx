import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import {ConfirmationDetail} from './ConfirmationDetail';

import MonkeyImg from '@/assets/img/bg/monkey.png';

const meta: Meta<typeof ConfirmationDetail> = {
  tags: ['autodocs'],
  component: ConfirmationDetail,
};

export default meta;
type Story = StoryObj<typeof ConfirmationDetail>;

export const ConfirmationDetailStories: Story = {
  render: () => (
    <Grid size={12} padding={'12px'}>
      <ConfirmationDetail
        amount2={345}
        currency2="USDT"
        amount={10}
        currency={'VSD'}
        icon={MonkeyImg}
        onClose={() => {}}
        type="ChargeWallet"
        walletAmount={100.9}
      />
    </Grid>
  ),
};
