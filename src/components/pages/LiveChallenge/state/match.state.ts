import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {Achievement} from '@/gql-codegen/generated';

type matchStage = 'running' | 'win' | 'loose' | 'disable';

type State = {
  stage: matchStage;
  afterSuccessRewards?: {
    achivements?: Achievement;
    newLevel?: number;
  };
};

type Action = {
  setMatchState: (matchStage: matchStage) => void;
};

const state = create<State & Action>(set => ({
  stage: 'running',
  afterSuccessRewards: undefined,
  setMatchState: stage => {
    console.log(stage);

    set(() => ({stage}));
  },
}));

export const useMatchState = createSelectors(state);
