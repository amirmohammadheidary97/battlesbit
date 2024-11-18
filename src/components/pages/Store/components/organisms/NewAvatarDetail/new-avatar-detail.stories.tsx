import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {getNewAvatarsList} from '../../../utils/fakeData';

import {NewAvatarDetail} from './NewAvatarDetail';

const meta: Meta<typeof NewAvatarDetail> = {
  tags: ['autodocs'],
  component: NewAvatarDetail,
};

export default meta;
type Story = StoryObj<typeof NewAvatarDetail>;

export const NewAvatarDetailStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <NewAvatarDetail newAvatarInfo={getNewAvatarsList[0]} />
    </Box>
  ),
};
