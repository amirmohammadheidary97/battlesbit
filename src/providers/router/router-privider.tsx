import {Suspense} from 'react';
import {RouterProvider as LibRouterProvider} from 'react-router';

import FullPageSkeleton from '@/components/atoms/Skeleton/FullPageSkeleton';
import {router} from '@/config/routes';

export const RouterProvider = () => (
  <Suspense fallback={<FullPageSkeleton />}>
    <LibRouterProvider router={router} fallbackElement={<FallBackElement />} />
  </Suspense>
);
const FallBackElement = (props: unknown) => {
  console.log(props);
  return <>fallback</>;
};
