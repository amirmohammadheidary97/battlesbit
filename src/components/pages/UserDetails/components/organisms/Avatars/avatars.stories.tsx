import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import Avatars from './Avatars';

const meta: Meta<typeof Avatars> = {
  tags: ['autodocs'],
  component: Avatars,
};

export default meta;
type Story = StoryObj<typeof Avatars>;

export const AvatarsStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Avatars
        selectAvatar={1}
        setSelectAvatar={() => {}}
        avatars={[]}
        title="Your avatars"
      />
    </Box>
  ),
};
