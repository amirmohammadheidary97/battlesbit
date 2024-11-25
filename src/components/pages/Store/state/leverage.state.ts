import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {LeverageItemType} from '@/types/models/store';

type State = {
  leverageInfo: LeverageItemType | undefined;
};

type Action = {
  setLeverageInfo: (leverageInfo: LeverageItemType) => void;
};

const state = create<State & Action>(set => ({
  leverageInfo: undefined,
  setLeverageInfo: leverageInfo => set(() => ({leverageInfo: leverageInfo})),
}));

export const leverageState = createSelectors(state);
