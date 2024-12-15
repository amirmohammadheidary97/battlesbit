import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import WaitForChargingWallet from './WaitForChargingWallet';

const meta: Meta<typeof WaitForChargingWallet> = {
  tags: ['autodocs'],
  component: WaitForChargingWallet,
};

export default meta;
type Story = StoryObj<typeof WaitForChargingWallet>;

export const WaitForChargingWalletStories: Story = {
  render: () => (
    <Grid size={12} container spacing={4} justifyContent={'center'} p={2}>
      <Grid size={10}>
        <WaitForChargingWallet />
      </Grid>
    </Grid>
  ),
};
