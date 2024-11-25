import type {Meta, StoryObj} from '@storybook/react';

import {FriendItem} from './FriendItem';

const meta: Meta<typeof FriendItem> = {
  tags: ['autodocs'],
  component: FriendItem,
};

export default meta;
type Story = StoryObj<typeof FriendItem>;

export const FriendItemStories: Story = {
  render: () => (
    <FriendItem
      isOnline={true}
      user={{id: 1, name: 'sample'}}
      inviteFriendFn={user => {
        console.log(user);
      }}
    />
  ),
};
