import {Box, Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {useMakeMatchState} from '../../state/make-match.state';

import {FriendsListDialog} from './FriendsListDialog';

const meta: Meta<typeof FriendsListDialog> = {
  tags: ['autodocs'],
  component: FriendsListDialog,
};

export default meta;
type Story = StoryObj<typeof FriendsListDialog>;

export const FriendsListDialogStories: Story = {
  render: () => {
    const {toggleOpenDialoge} = useMakeMatchState();

    return (
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Button onClick={() => toggleOpenDialoge()} variant="contained">
          open dialog
        </Button>
        <FriendsListDialog />
      </Box>
    );
  },
};
