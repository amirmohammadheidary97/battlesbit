import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {GameMatchPosition} from '@/gql-codegen/generated';

type State = {
  selectedPositionToReverse?: GameMatchPosition;
  selectedPositionToEditTpsl?: GameMatchPosition;
  selectedPositionToClose?: GameMatchPosition;
  selectedPositionToCancel?: GameMatchPosition;
  positions: GameMatchPosition[];
};

type Action = {
  setSelectedPositionToReverse: (position?: GameMatchPosition) => void;
  setSelectedPositionToEditTpsl: (position?: GameMatchPosition) => void;
  setSelectedPositionToClose: (position?: GameMatchPosition) => void;
  setSelectedPositionToCancel: (position?: GameMatchPosition) => void;
  setPositions: (positions: GameMatchPosition[]) => void;
};

const state = create<State & Action>(set => ({
  positions: [],
  selectedPositionToReverse: undefined,
  selectedPositionToEditTpsl: undefined,
  selectedPositionToCancel: undefined,
  selectedPositionToClose: undefined,
  setPositions: positions => {
    set(() => ({positions}));
  },
  setSelectedPositionToEditTpsl: position => {
    set(() => ({selectedPositionToEditTpsl: position}));
  },
  setSelectedPositionToReverse: position => {
    set(() => ({selectedPositionToReverse: position}));
  },
  setSelectedPositionToCancel: position => {
    set(() => ({selectedPositionToCancel: position}));
  },
  setSelectedPositionToClose: position => {
    set(() => ({selectedPositionToClose: position}));
  },
}));

export const usePositionsState = createSelectors(state);
