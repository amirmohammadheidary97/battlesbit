import {useState} from 'react';
import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import DepositItem from './DepositItem';

const meta: Meta<typeof DepositItem> = {
  tags: ['autodocs'],
  component: DepositItem,
};

export default meta;
type Story = StoryObj<typeof DepositItem>;

export const DepositItemStories: Story = {
  render: () => {
    const [selected, setSelected] = useState<'bitcoin' | 'paypal' | undefined>(
      'paypal',
    );
    return (
      <Grid size={12} container justifyContent={'center'} p={2}>
        <Grid size={10} container gap={4}>
          <DepositItem
            desc="some desciption"
            title="bitcoin"
            setSelectedMethod={setSelected}
            selectedMethod={selected}
          />
          <DepositItem
            desc="some desciption"
            title="paypal"
            setSelectedMethod={setSelected}
            selectedMethod={selected}
          />
        </Grid>
      </Grid>
    );
  },
};
