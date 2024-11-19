import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import {FundsMessageItem} from './FundsMessage';

const meta: Meta<typeof FundsMessageItem> = {
  tags: ['autodocs'],
  component: FundsMessageItem,
};

export default meta;
type Story = StoryObj<typeof FundsMessageItem>;

export const FundsMessageItemStories: Story = {
  render: () => (
    <Grid size={12} padding={'0px 20px'}>
      <FundsMessageItem
        onClick={() => {}}
        description="please charge your wallet to get new items"
        errorMessage="Insufficient funds"
      />
    </Grid>
  ),
};
