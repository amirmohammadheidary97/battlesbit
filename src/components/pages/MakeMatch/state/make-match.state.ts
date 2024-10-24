import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {User} from '@/types/models/user';

type friendItem = {
  user: User;
  isOnline: boolean;
};

type matchConfig = {
  time: {
    label: string;
    value: number;
  };
  details: {
    entryFee: number;
    prize: number;
    time: number;
  };
};
type matchStart = 'normal' | 'friendly';

type State = {
  friends: friendItem[];
  selectedFriend?: User;
  isOpen: boolean;
  startMatch?: matchStart;
  matchConfigState?: matchConfig;
};

type Action = {
  setFriends: (friends: friendItem[]) => void;
  setSelectedFriend: (friend?: User) => void;
  toggleOpenDialoge: () => void;
  setStartMatch: (status: matchStart) => void;
  setMatchConfig: (configs: matchConfig) => void;
};

const state = create<State & Action>(set => ({
  friends: [],
  selectedFriend: undefined,
  isOpen: false,
  startMatch: undefined,
  matchConfigState: undefined,
  setFriends: friends => set(() => ({friends: friends})),
  setSelectedFriend: friend => set(() => ({selectedFriend: friend})),
  toggleOpenDialoge: () => set(state => ({isOpen: !state.isOpen})),
  setStartMatch: from => set(() => ({startMatch: from})),
  setMatchConfig: configs => set(() => ({matchConfigState: configs})),
}));

export const useMakeMatchState = createSelectors(state);
