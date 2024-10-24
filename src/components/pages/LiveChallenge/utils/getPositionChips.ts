import type {PositionChipProps} from '../components/PositionItem/components/PositionChip';

import type {GameMatchPosition} from '@/gql-codegen/generated';

export const getPositionChips = (pos: GameMatchPosition) => {
  const chips: PositionChipProps[] = [
    {type: 'side', value: pos?.side as string},
    {type: 'lvg', value: pos?.leverage ?? 1},
  ];

  if (pos?.targetPoint) {
    chips.push({
      type: 'other',
      value: 'Tp',
    });
  }
  if (pos?.stopLoss) {
    chips.push({
      type: 'other',
      value: 'Sl',
    });
  }
  return chips;
};
