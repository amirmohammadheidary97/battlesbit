/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect, useState} from 'react';

export const useUserDetail = () => {
  const [selectAvatar, setSelectAvatar] = useState<number>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };
  useEffect(() => {
    setTimeout(() => {
      setSelectAvatar(10);
    }, 1500);
  }, []);
  return {
    selectAvatar,
    setSelectAvatar,
    handleInputValue,
    inputValue,
  };
};
