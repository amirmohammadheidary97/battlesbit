import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {MessageLeaderBoard} from './MessageLeaderBoard';

const meta: Meta<typeof MessageLeaderBoard> = {
  tags: ['autodocs'],
  component: MessageLeaderBoard,
};

export default meta;
type Story = StoryObj<typeof MessageLeaderBoard>;

export const MessageLeaderBoardStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <MessageLeaderBoard
        message="You are performing better than
 40% of other players!"
        valueNumber={3}
      />
    </Box>
  ),
};
