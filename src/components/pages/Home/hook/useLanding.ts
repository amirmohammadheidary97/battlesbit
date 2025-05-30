import {useEffect, useState} from 'react';

export const useLanding = () => {
  const [iShowBalance, setIShowBalance] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleShowViewBalance = () => {
    setIShowBalance(!iShowBalance);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return {
    handleShowViewBalance,
    iShowBalance,
    isLoading,
  };
};
