import {create} from 'zustand';

import {createSelectors} from '@/config/zustand/selectorGenerator';
import type {Asset} from '@/gql-codegen/generated';

type State = {
  selectedAsset?: Asset;
  assets: Asset[];
  favoritAssets: Asset[];
};

type Action = {
  setSelectedAsset: (asset?: Asset) => void;
  setAssets: (assets: State['assets']) => void;
  setFavoritAsset: (asset: Asset) => void;
};

const state = create<State & Action>(set => ({
  selectedAsset: undefined,
  assets: [],
  favoritAssets: [],
  setSelectedAsset: asset => set(() => ({selectedAsset: asset})),
  setAssets: assets => set(() => ({assets})),
  setFavoritAsset: asset =>
    set(st => {
      const idx = st.favoritAssets.indexOf(asset);
      if (idx >= 0) {
        return {
          ...st,
          favoritAssets: [
            ...st.favoritAssets.slice(0, idx),
            ...st.favoritAssets.slice(idx),
          ],
        };
      } else {
        return {...st, favoritAssets: [...st.favoritAssets, asset]};
      }
    }),
}));

export const useAssetsState = createSelectors(state);
