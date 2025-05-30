import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {StatusText} from '../StatusText';

import {LastGamePlayerAvatar} from './LastGamePlayerAvatar';

import player1 from '@/assets/img/icons/avatars/player1.png';
import player2 from '@/assets/img/icons/avatars/player2.png';

const meta: Meta<typeof LastGamePlayerAvatar> = {
  tags: ['autodocs'],
  component: LastGamePlayerAvatar,
};

export default meta;
type Story = StoryObj<typeof LastGamePlayerAvatar>;

export const LastGamePlayerStories: Story = {
  render: () => (
    <Box
      display={'flex'}
      flexDirection={'row'}
      gap={0}
      alignItems={'center'}
      justifyContent={'center'}
      border={'1px solid #fff'}>
      <LastGamePlayerAvatar dir="ltr" img={player1} />
      <LastGamePlayerAvatar dir="rtl" img={player2} />
      <StatusText result={-21.4} />
      <StatusText result={21.4} />
    </Box>
  ),
};
