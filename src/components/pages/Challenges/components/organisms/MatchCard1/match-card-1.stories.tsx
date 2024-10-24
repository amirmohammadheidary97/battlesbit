import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {GameCard} from './MatchCard1';

import wrwrw from '@/assets/img/icons/general/gift.png';

const meta: Meta<typeof GameCard> = {
  tags: ['autodocs'],
  component: GameCard,
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const GameCardStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GameCard
        chipText="Lorem"
        prize={{
          amount: 200,
          currency: 'USDT',
          label: 'Ticket Price',
          iconSrc: wrwrw,
        }}
        ticketPrice={{
          amount: 200,
          currency: 'USDT',
          label: 'Prize',
          iconSrc: wrwrw,
        }}
        vsText="1 vs 1"
      />
    </Box>
  ),
};
