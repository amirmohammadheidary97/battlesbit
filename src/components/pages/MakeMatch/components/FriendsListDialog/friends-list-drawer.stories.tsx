import type {Meta, StoryObj} from '@storybook/react';

import {FriendsListDialog} from './FriendsListDialog';

const meta: Meta<typeof FriendsListDialog> = {
  tags: ['autodocs'],
  component: FriendsListDialog,
};

export default meta;
type Story = StoryObj<typeof FriendsListDialog>;

export const FriendsListDialogStories: Story = {
  render: () => (
    // <Box display={'flex'} flexDirection={'column'} gap={2}>
    <FriendsListDialog />
    // </Box>
  ),
};
