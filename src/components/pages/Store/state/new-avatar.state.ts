import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {NewAvatarsType} from '@/types/models/store';

type State = {
  newAvatarInfo: NewAvatarsType | undefined;
};

type Action = {
  setNewAvatarInfo: (newAvatarInfo?: NewAvatarsType) => void;
};

const state = create<State & Action>(set => ({
  newAvatarInfo: undefined,
  setNewAvatarInfo: newAvatarInfo =>
    set(() => ({newAvatarInfo: newAvatarInfo})),
}));

export const newAvatarState = createSelectors(state);
