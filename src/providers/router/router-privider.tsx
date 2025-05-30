import {Suspense} from 'react';
import {RouterProvider as LibRouterProvider} from 'react-router';

import {router} from '@/config/routes';

export const RouterProvider = () => (
  <Suspense fallback={<>loading ...</>}>
    <LibRouterProvider router={router} fallbackElement={<FallBackElement />} />
  </Suspense>
);
const FallBackElement = (props: unknown) => {
  console.log(props);
  return <>fallback</>;
};
