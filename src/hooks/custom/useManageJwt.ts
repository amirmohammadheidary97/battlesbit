import {useEffect} from 'react';

import jwtManagerSingleton from '@/config/jwt-manager';

export const useManageJwt = () => {
  //
  useEffect(() => {
    jwtManagerSingleton.init({
      onRefreshAccessTokenError: error => {
        console.log(error);
        // toast something or redirect to login
      },
    });
  }, []);
};
