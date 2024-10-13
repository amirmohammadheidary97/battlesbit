import type {Asset} from '@/gql-codegen/generated';

export const getAdoptedNewAssetsList = (oldList: Asset[], newList: Asset[]) => {
  if (!newList?.length) return oldList;

  let finalList: Asset[] = [...oldList];

  newList.forEach(asset => {
    const oidx = finalList.findIndex(fas => fas?.id === asset?.id);
    if (oidx >= 0) {
      finalList[oidx] = asset;
    } else {
      finalList.push(asset);
    }
  });
  return finalList;
};
