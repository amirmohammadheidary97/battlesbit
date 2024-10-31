import {Navigate, Outlet} from 'react-router';

import jwtManager from '../jwt-manager';

import {useAuthenticationStore} from '@/hooks/global-stores/authentication.store';

export const PrivateOutlet = () => {
  //
  const {accessToken} = useAuthenticationStore();
  const isExpired = jwtManager.getRemainingTime() <= 0;
  if (!isExpired) {
    jwtManager.init();
  }
  //
  return <Outlet />;
  // return (
  //   <>{accessToken && !isExpired ? <Outlet /> : <Navigate to={'login'} />}</>
  // );
};
