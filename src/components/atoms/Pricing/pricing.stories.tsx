import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import Pricing from './Pricing';

const meta: Meta<typeof Pricing> = {
  tags: ['autodocs'],
  component: Pricing,
};

export default meta;
type Story = StoryObj<typeof Pricing>;

export const PricingStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Pricing
        iShowBalance={true}
        formatPrice={'USDT'}
        amount={9999}
        mainTextProps={{
          color: 'textPrimary',
          fontWeight: 600,
          fontSize: '30px',
        }}
        decimalTextProps={{
          color: 'textPrimary',
          fontSize: '18px',
          fontWeight: 400,
        }}
        symbolTextProps={{
          color: 'textPrimary',
          fontSize: '13px',
          fontWeight: 400,
        }}
      />
    </Box>
  ),
};
