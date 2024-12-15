import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import WalletBalanceAmount from './moneyAmount';

const meta: Meta<typeof WalletBalanceAmount> = {
  tags: ['autodocs'],
  component: WalletBalanceAmount,
};

export default meta;
type Story = StoryObj<typeof WalletBalanceAmount>;

export const WalletBalanceAmountStories: Story = {
  render: () => (
    <Grid size={12} container justifyContent={'center'} p={2}>
      <Grid size={10} container spacing={4}>
        <Grid size={6}>transaction item</Grid>
        <Grid size={6}>wallet balance</Grid>
        <Grid size={6}>
          <WalletBalanceAmount
            amount={399740}
            isTransaction
            floatSize="10px"
            integerSize="15px"
          />
        </Grid>
        <Grid size={6}>
          <WalletBalanceAmount
            floatSize="28px"
            integerSize="48px"
            amount={12500}
          />
        </Grid>
      </Grid>
    </Grid>
  ),
};
