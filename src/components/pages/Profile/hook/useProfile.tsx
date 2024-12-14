import {useEffect, useState} from 'react';

export const useProfile = () => {
  const [languageType, setLanguageType] = useState<number>();
  const [ShowLanguageDrawer, setShowLanguageDrawer] = useState<boolean>(false);
  const [ShowAccountInformationDrawer, setShowAccountInformationDrawer] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLanguageType(0);
    }, 1500);
  }, []);
  return {
    languageType,
    setLanguageType,
    setShowLanguageDrawer,
    ShowLanguageDrawer,
    setShowAccountInformationDrawer,
    ShowAccountInformationDrawer,
  };
};
