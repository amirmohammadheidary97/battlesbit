import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import WalletBalanceAmount from './moneyAmount';
import TransactionItem from './TransactionItem';

const meta: Meta<typeof WalletBalanceAmount> = {
  tags: ['autodocs'],
  component: WalletBalanceAmount,
};

export default meta;
type Story = StoryObj<typeof WalletBalanceAmount>;

export const WalletBalanceAmountStories: Story = {
  render: () => (
    <Grid size={12} container spacing={4} justifyContent={'center'} p={2}>
      <Grid size={12}>
        <TransactionItem
          actionDate="22 March 2020"
          amount={12.54}
          trasactionType="SOL"
        />
      </Grid>
      <Grid size={10}>
        <TransactionItem
          actionDate="20 March 2021"
          amount={555.34}
          trasactionType="Paypal"
        />
      </Grid>
      <Grid size={10}>
        <TransactionItem
          actionDate="22 July 2032"
          amount={100.67}
          trasactionType="Transfer"
        />
      </Grid>
    </Grid>
  ),
};
