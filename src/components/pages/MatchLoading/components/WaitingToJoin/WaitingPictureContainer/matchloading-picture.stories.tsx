import type {Meta, StoryObj} from '@storybook/react';

import MatchloadingPicture from './matchloading-animation';

const meta: Meta<typeof MatchloadingPicture> = {
  tags: ['autodocs'],
  component: MatchloadingPicture,
};

export default meta;
type Story = StoryObj<typeof MatchloadingPicture>;

export const FriendsListDialogStories: Story = {
  render: () => <MatchloadingPicture />,
};
