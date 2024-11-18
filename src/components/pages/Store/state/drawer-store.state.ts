import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';

type State = {
  openChargeWallet: boolean;
};

type Action = {
  setOpenChargeWallet: (bool: boolean) => void;
};

const state = create<State & Action>(set => ({
  openChargeWallet: false,
  setOpenChargeWallet: bool => set(() => ({openChargeWallet: bool})),
}));

export const drawerStoreState = createSelectors(state);
