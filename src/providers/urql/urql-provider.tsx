import type {ReactNode} from 'react';
import {Provider} from 'urql';

import {UrqlClient} from '@/config/urql-client';

type Props = {
  children?: ReactNode;
};
export const URQLProvider = ({children}: Props) => (
  <Provider value={UrqlClient}>{children}</Provider>
);
