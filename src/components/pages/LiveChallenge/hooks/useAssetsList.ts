/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

import {useAssetsState} from '../state/assets.state';
import {getAdoptedNewAssetsList} from '../utils/assetsList.utils';

import {
  useAssetsSubscription,
  useGetAssetsQuery,
} from '@/gql-codegen/generated';

export const useAssetsList = () => {
  //
  const {assets, setAssets} = useAssetsState();
  const [{fetching: subscriptionFetching, data: subscriptionData}] =
    useAssetsSubscription({
      pause: false,
    });

  useEffect(() => {
    console.log(subscriptionData);
  }, [subscriptionData]);

  const [historyDataFetchedOnce, setHistoryDataFetchedOnce] =
    useState<boolean>(false);

  const [{data: queryData, fetching: queryIsFetching}] = useGetAssetsQuery({
    pause: !subscriptionFetching && !historyDataFetchedOnce,
  });
  useEffect(() => {
    if (queryData && !queryIsFetching) {
      setAssets(
        getAdoptedNewAssetsList(
          assets?.length ? assets : [],
          queryData?.assets?.length
            ? (queryData?.assets?.map(ase => ({
                id: ase?.id as string,
                priceUSD: ase?.priceUSD as number,
              })) as any[])
            : [],
        ),
      );
      setHistoryDataFetchedOnce(true);
    }
  }, [queryData, queryIsFetching]);
  //
  useEffect(() => {
    if (subscriptionData?.assetsUpdated?.length) {
      setAssets(
        getAdoptedNewAssetsList(
          assets?.length ? assets : [],
          subscriptionData?.assetsUpdated as any[],
        ),
      );
    }
  }, [subscriptionData, setAssets]);
  //
  return {assets};
};
