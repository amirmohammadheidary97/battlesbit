import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import InviteFriends from './InviteFriends';

const meta: Meta<typeof InviteFriends> = {
  tags: ['autodocs'],
  component: InviteFriends,
};

export default meta;
type Story = StoryObj<typeof InviteFriends>;

export const InviteFriendsStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <InviteFriends
        selectedId={1}
        setSelectedId={() => {}}
        handleShowAddFriend={() => {}}
      />
    </Box>
  ),
};
