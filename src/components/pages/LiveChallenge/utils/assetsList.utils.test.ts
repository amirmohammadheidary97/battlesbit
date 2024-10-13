import {getAdoptedNewAssetsList} from './assetsList.utils';

// import type {Asset} from '@/gql-codegen/generated';

const arr1: any[] = [
  {
    id: 'ethereum',
    priceUSD: 2348.28,
  },
  {
    id: 'binance-coin',
    priceUSD: 473.98,
  },
  {
    id: 'dogecoin',
    priceUSD: 1.096609,
  },
];

const arr2: any[] = [
  {
    id: 'ethereum',
    priceUSD: 2348.29,
  },
  {
    id: 'dogecoin',
    priceUSD: 0.096699,
  },
  {
    id: 'polygon',
    priceUSD: 0.393537,
  },
];

test('updates old assets list by comparing with new list', () => {
  expect(JSON.stringify(getAdoptedNewAssetsList(arr1, arr2))).toBe(
    JSON.stringify([
      {id: 'ethereum', priceUSD: 2348.29},
      {id: 'binance-coin', priceUSD: 473.98},
      {id: 'dogecoin', priceUSD: 0.096699},
      {id: 'polygon', priceUSD: 0.393537},
    ]),
  );
});
