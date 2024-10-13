import {devtoolsExchange} from '@urql/devtools';
import {
  cacheExchange,
  // errorExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql';

// const globalErrorExchange = errorExchange({
//   onError: (error) => {
//     // error
//   },
// });

export const zeroConfigExchanges = [
  cacheExchange,
  fetchExchange,
  devtoolsExchange,
];
