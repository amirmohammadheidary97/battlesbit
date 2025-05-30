import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import GameHistoryItemInfo from './GameHistoryItemInfo';

const meta: Meta<typeof GameHistoryItemInfo> = {
  tags: ['autodocs'],
  component: GameHistoryItemInfo,
};

export default meta;
type Story = StoryObj<typeof GameHistoryItemInfo>;

export const GameHistoryItemInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GameHistoryItemInfo
        title="Challenge Item Info"
        time="10:00"
        result={100}
        xp={100}
        entry={100}
        date="2021-01-01"
        id={1}
      />
    </Box>
  ),
};
