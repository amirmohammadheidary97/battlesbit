import {devtoolsExchange} from '@urql/devtools';
import {cacheExchange, fetchExchange} from 'urql';

export const zeroConfigExchanges = [
  cacheExchange,
  fetchExchange,
  devtoolsExchange,
];
