import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import BalanceInfo from './BalanceInfo';

const meta: Meta<typeof BalanceInfo> = {
  tags: ['autodocs'],
  component: BalanceInfo,
};

export default meta;
type Story = StoryObj<typeof BalanceInfo>;

export const BalanceInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <BalanceInfo
        handleShowViewBalance={() => {}}
        balance={9999}
        convertedTomansBalance={67430000}
        currency="USDT"
        iShowBalance={true}
      />
    </Box>
  ),
};
