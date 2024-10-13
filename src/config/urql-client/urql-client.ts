import {retryExchange} from '@urql/exchange-retry';
import {createClient as createWSClient} from 'graphql-ws';
import {Client, subscriptionExchange} from 'urql';

import {zeroConfigExchanges} from './exchanges';

import {BACKEND_URL} from '@/config/constants/URL-CONSTANTS';
import {useAuthenticationStore} from '@/hooks/global-stores/authentication.store';

// None of these options have to be added, these are the default values.
const options = {
  initialDelayMs: 1000,
  maxDelayMs: 15000,
  randomDelay: true,
  maxNumberAttempts: 10000,
  // retryIf: err => err && err.networkError,
};

const wsClient = createWSClient({
  url: `wss://${BACKEND_URL}/graphql/query`,
  retryAttempts: 1000,
  // shouldRetry:()=>true
});

export const UrqlClient = new Client({
  url: `https://${BACKEND_URL}/graphql/query`,
  exchanges: [
    ...zeroConfigExchanges,
    subscriptionExchange({
      forwardSubscription: request => {
        const input = {...request, query: request.query || ''};
        return {
          subscribe: sink => {
            const unsubscribe = wsClient.subscribe(input, sink);
            return {unsubscribe};
          },
        };
      },
    }),
    retryExchange(options),
  ],
  fetchOptions: () => {
    const token = useAuthenticationStore.getState().accessToken;
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  },
});
