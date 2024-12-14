import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {Achievement} from '@/gql-codegen/generated';

type matchStage = 'running' | 'win' | 'result' | 'loose' | 'disable';

type State = {
  stage: matchStage;
  showWinDetails: boolean;
  afterSuccessRewards?: {
    achivements?: Achievement;
    newLevel?: number;
  };
};

type Action = {
  setMatchState: (matchStage: matchStage) => void;
  setShowWinDetails: (showWinDetails: boolean) => void;
};

const state = create<State & Action>(set => ({
  stage: 'running',
  showWinDetails: false,
  afterSuccessRewards: undefined,
  setMatchState: stage => {
    set(() => ({stage}));
  },
  setShowWinDetails: open => {
    set(() => ({showWinDetails: open}));
  },
}));

export const useMatchState = createSelectors(state);
