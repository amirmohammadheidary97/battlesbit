import {Box} from '@mui/material';
import type {Meta,StoryObj} from '@storybook/react';

import CurrencyDisplay from './CurrencyDisplay';
import StarCoinIcon from '@/assets/img/icons/general/star2.svg';

const meta: Meta<typeof CurrencyDisplay> = {
  tags: ['autodocs'],
  component: CurrencyDisplay,
};

export default meta;
type Story = StoryObj<typeof CurrencyDisplay>;

export const HomeHeaderStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <CurrencyDisplay amount={1234} currency='VSD' iconUrl={StarCoinIcon} />
    </Box>
  ),
};
