import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {gameHistoryItemList} from '../../../utils/fakeData';

import GameHistoryItem from './GameHistoryItem';

const meta: Meta<typeof GameHistoryItem> = {
  tags: ['autodocs'],
  component: GameHistoryItem,
};

export default meta;
type Story = StoryObj<typeof GameHistoryItem>;

export const GameHistoryItemStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GameHistoryItem gameHistoryItem={gameHistoryItemList[0]} />
    </Box>
  ),
};
