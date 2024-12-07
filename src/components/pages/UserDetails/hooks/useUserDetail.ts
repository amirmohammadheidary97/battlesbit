/* eslint-disable react-hooks/exhaustive-deps */

import {useState} from 'react';

export const useUserDetail = () => {
  const [selectAvatar, setSelectAvatar] = useState<number>(10);

  return {
    selectAvatar,
    setSelectAvatar,
  };
};
