import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {AiAssistantCard} from './AiAssistantCard';

const meta: Meta<typeof AiAssistantCard> = {
  tags: ['autodocs'],
  component: AiAssistantCard,
};

export default meta;
type Story = StoryObj<typeof AiAssistantCard>;

export const AiAssistantCardStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <AiAssistantCard />
    </Box>
  ),
};
