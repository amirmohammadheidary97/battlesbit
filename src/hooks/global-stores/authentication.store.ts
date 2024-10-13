import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {createSelectors} from '@/config/zustand/selectorGenerator';

type IAuthState = {
  accessToken?: string;
  refreshToken?: string;
  expireTime?: number;
};

type IAuthActions = {
  setAccessToken: (token?: string) => void;
  setRefreshToken: (token?: string) => void;
  setExpireTime: (time?: number) => void;
};

const useAuthenticationStoreBase = create<IAuthState & IAuthActions>()(
  persist(
    set => ({
      accessToken: undefined,
      refreshToken: undefined,
      expireTime: undefined,
      setAccessToken: token => set({accessToken: token}),
      setRefreshToken: token => set({refreshToken: token}),
      setExpireTime: time => set({expireTime: time}),
    }),
    {
      name: 'tokens-storage',
    },
  ),
);

export const useAuthenticationStore = createSelectors(
  useAuthenticationStoreBase,
);
