import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PositionTitleValue} from './PositionTitleValue';

const meta: Meta<typeof PositionTitleValue> = {
  tags: ['autodocs'],
  component: PositionTitleValue,
};

export default meta;
type Story = StoryObj<typeof PositionTitleValue>;

export const PositionTitleValueStories: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        p={2}
        bgcolor={theme.palette.background.default}>
        <PositionTitleValue
          title="Price"
          type="price"
          value={1000.45}
          alignItems="flex-start"
          valueVariant="h6"
        />
        <PositionTitleValue
          title="Pnl"
          type="pnl"
          value={87.43}
          alignItems="flex-start"
          valueVariant="h6"
        />
        <PositionTitleValue
          title="Margin (USDT)"
          type="other"
          value={41.45}
          alignItems="flex-start"
          valueVariant="overline"
        />
        <PositionTitleValue
          title="Margin (USDT)"
          type="other"
          value={41.45}
          alignItems="flex-end"
          valueVariant="overline"
        />
        <PositionTitleValue
          title="Pnl"
          type="pnl"
          value={-34.35}
          alignItems="flex-start"
          valueVariant="h6"
        />
      </Box>
    );
  },
};
