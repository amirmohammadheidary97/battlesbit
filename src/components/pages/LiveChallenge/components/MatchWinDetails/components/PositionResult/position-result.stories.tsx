import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {PositionResult} from './PositionResult';

import {GameMatchPositionSide} from '@/gql-codegen/generated';

const meta: Meta<typeof PositionResult> = {
  component: PositionResult,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PositionResult>;

export const PositionResultStory: Story = {
  render: () => {
    const theme = useTheme();

    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}
        p={2}
        bgcolor={theme.palette.background.default}
        maxWidth={'768px'}>
        <PositionResult
          asset={{name: 'btc'} as any}
          pnlAmount={20}
          side={GameMatchPositionSide.Buy}
        />
        <PositionResult
          asset={{name: 'eth'} as any}
          pnlAmount={-20}
          side={GameMatchPositionSide.Buy}
        />
        <PositionResult
          asset={{name: 'boy'} as any}
          pnlAmount={20}
          side={GameMatchPositionSide.Sell}
        />
      </Box>
    );
  },
};
