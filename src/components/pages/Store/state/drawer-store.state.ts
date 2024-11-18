import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';

type State = {
  openChargeWallet: boolean;
  openLeverage: boolean;
  openNewAvatar: boolean;
};

type Action = {
  setOpenChargeWallet: (bool: boolean) => void;
  setOpenLeverage: (bool: boolean) => void;
  setOpenNewAvatar: (bool: boolean) => void;
};

const state = create<State & Action>(set => ({
  openChargeWallet: false,
  openLeverage: false,
  openNewAvatar: false,
  setOpenLeverage: bool => set(() => ({openLeverage: bool})),
  setOpenChargeWallet: bool => set(() => ({openChargeWallet: bool})),
  setOpenNewAvatar: bool => set(() => ({openNewAvatar: bool})),
}));

export const drawerStoreState = createSelectors(state);
