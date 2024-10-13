import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';

type ILoadingState = {
  loading: boolean;
};

type Action = {
  turnOnLoading: () => void;
  turnOffLoading: () => void;
  toggleLoading: () => void;
};

const useBearStoreBase = create<ILoadingState & Action>()(set => ({
  loading: false,
  turnOnLoading: () => set({loading: true}),
  turnOffLoading: () => set({loading: false}),
  toggleLoading: () => set(state => ({loading: !state.loading})),
}));

export const useGlobalLoadingStore = createSelectors(useBearStoreBase);
