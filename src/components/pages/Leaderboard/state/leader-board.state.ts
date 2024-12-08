import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {UserItemType} from '@/types/models/leaderboard';

type State = {
  leaderBoardList: UserItemType[];
};

type Action = {
  setLeaderBoardList: (leaderBoardList: UserItemType[]) => void;
};

const state = create<State & Action>(set => ({
  leaderBoardList: [],
  setLeaderBoardList: leaderBoardList =>
    set(() => ({leaderBoardList: leaderBoardList})),
}));

export const leverageState = createSelectors(state);
