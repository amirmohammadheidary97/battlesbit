import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ChallengeInvitation} from './ChallengeInvitation';

import defaultAvatar from '@/assets/img/icons/avatars/avatar1.svg';

const meta: Meta<typeof ChallengeInvitation> = {
  tags: ['autodocs'],
  component: ChallengeInvitation,
};

export default meta;
type Story = StoryObj<typeof ChallengeInvitation>;

export const ChallengeInvitationStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ChallengeInvitation
        challenger={{
          avatar: defaultAvatar,
          level: 25,
          name: 'Mamad',
        }}
        gameDetails={{
          entryFee: 1000,
          prize: 2000,
          time: 1234567,
        }}
      />
    </Box>
  ),
};
