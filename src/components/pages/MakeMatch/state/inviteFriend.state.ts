import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {User} from '@/types/models/user';

type friendItem = {
  user: User;
  isOnline: boolean;
};

type State = {
  friends: friendItem[];
  selectedFriends: friendItem[];
  isOpen: boolean;
};

type Action = {
  setFriends: (friends: friendItem[]) => void;
  setSelectedFriends: (friend: friendItem) => void;
  setIsOpen: () => void;
};

const state = create<State & Action>(set => ({
  friends: [],
  selectedFriends: [],
  isOpen: false,
  setFriends: friends => set(() => ({friends: friends})),
  setSelectedFriends: friend =>
    set(st => {
      const idx = st.selectedFriends.indexOf(friend);
      if (idx >= 0) {
        return {
          ...st,
          selectedFriends: [
            ...st.selectedFriends.slice(0, idx),
            ...st.selectedFriends.slice(idx),
          ],
        };
      } else {
        return {...st, selectedFriends: [...st.selectedFriends, friend]};
      }
    }),
  setIsOpen: () => set(state => ({isOpen: !state.isOpen})),
}));

export const useInvitationState = createSelectors(state);
