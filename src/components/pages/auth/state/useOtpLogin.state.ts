import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {Scalars} from '@/gql-codegen/generated';

type State = {
  email: Scalars['String']['input'];
};

type Action = {
  setEmail: (email: State['email']) => void;
};

const state = create<State & Action>(set => ({
  email: '',
  setEmail: email => set(() => ({email})),
}));

export const useOtpLoginState = createSelectors(state);
