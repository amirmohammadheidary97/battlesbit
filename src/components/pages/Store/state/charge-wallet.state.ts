import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {ChargeWalletItemType} from '@/types/models/store';

type State = {
  chargeWalletInfo: ChargeWalletItemType | undefined;
};

type Action = {
  setChargeWalletInfo: (chargeWalletInfo?: ChargeWalletItemType) => void;
};

const state = create<State & Action>(set => ({
  chargeWalletInfo: undefined,
  setChargeWalletInfo: chargeWalletInfo =>
    set(() => ({chargeWalletInfo: chargeWalletInfo})),
}));

export const chargeWalletState = createSelectors(state);
