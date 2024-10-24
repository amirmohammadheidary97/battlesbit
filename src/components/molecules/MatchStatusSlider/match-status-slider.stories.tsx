import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {MatchStatusSlider} from './MatchStatusSlider';

const meta: Meta<typeof MatchStatusSlider> = {
  tags: ['autodocs'],
  component: MatchStatusSlider,
};

export default meta;
type Story = StoryObj<typeof MatchStatusSlider>;

export const MatchStatusSliderStories: Story = {
  render: ({...args}) => (
    <Box display={'flex'} flexDirection={'column'} gap={2} p={10}>
      <MatchStatusSlider {...args} />
    </Box>
  ),
  args: {
    player1: {
      name: 'You',
      progressPercent: 10,
      income: -40,
    },
    player2: {
      name: 'Amir Mohammad',
      progressPercent: 70,
      income: 200,
    },
  },
};
