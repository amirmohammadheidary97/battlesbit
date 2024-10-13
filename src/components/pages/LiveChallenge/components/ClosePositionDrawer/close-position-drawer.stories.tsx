import {Box, Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {usePositionsState} from '../../state/positions.state';

import {ClosePositionDrawer} from './ClosePositionDrawer';

import type {GameMatchPosition} from '@/gql-codegen/generated';
import {
  GameMatchPositionSide,
  GameMatchPositionStatus,
  GameMatchPositionType,
} from '@/gql-codegen/generated';

const meta: Meta<typeof ClosePositionDrawer> = {
  tags: ['autodocs'],
  component: ClosePositionDrawer,
};

export default meta;
type Story = StoryObj<typeof ClosePositionDrawer>;

export const gameMatchPositionFakeData: GameMatchPosition = {
  __typename: 'GameMatchPosition',
  baseToken: 'ETH',
  closePrice: 1800,
  closedAt: 1696012800,
  createdAt: 1695926400,
  entryPrice: 1750,
  expiredAt: 1696105600,
  gameMatchID: 'match_001',
  gameMatchParticipantID: '12345',
  id: '29384',
  leverage: 5,
  limitPrice: 1850,
  margin: 500,
  openedAt: 1695929400,
  profit: 250,
  quoteToken: 'USDT',
  side: GameMatchPositionSide.Buy,
  size: 1.5,
  status: GameMatchPositionStatus.Open,
  stopLoss: 1700,
  targetPoint: 1900,
  type: GameMatchPositionType.Limit,
  updatedAt: 1695930000,
  match: {} as any,
  participant: {} as any,
};

export const ClosePositionDrawerStories: Story = {
  render: () => {
    const {setSelectedPositionToClose} = usePositionsState();
    const onClick = () => {
      setSelectedPositionToClose(gameMatchPositionFakeData);
    };
    return (
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Button onClick={onClick}>Open</Button>
        <ClosePositionDrawer />
      </Box>
    );
  },
};
