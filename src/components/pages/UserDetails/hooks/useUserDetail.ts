/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect, useState} from 'react';

export const useUserDetail = () => {
  const [selectAvatar, setSelectAvatar] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setSelectAvatar(10);
    }, 1500);
  }, []);
  return {
    selectAvatar,
    setSelectAvatar,
  };
};
