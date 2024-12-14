import type {PositionResultProps} from './components/PositionResult';

import {GameMatchPositionSide} from '@/gql-codegen/generated';

export const positionResultList: PositionResultProps[] = [
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Sell,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Sell,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Sell,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Sell,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 50,
    side: GameMatchPositionSide.Sell,
  },
  {
    asset: {name: 'btc'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'sol'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
  {
    asset: {name: 'eth'} as any,
    pnlAmount: 20,
    side: GameMatchPositionSide.Buy,
  },
];
