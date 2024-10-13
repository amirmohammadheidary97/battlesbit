import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {NewGameButton} from './NewGameButton';

const meta: Meta<typeof NewGameButton> = {
  tags: ['autodocs'],
  component: NewGameButton,
};

export default meta;
type Story = StoryObj<typeof NewGameButton>;

export const NewGameButtonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <NewGameButton text="Play With Friends" onClick={() => {}} />
    </Box>
  ),
};
