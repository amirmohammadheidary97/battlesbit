/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {chargeWalletState} from '../state/charge-wallet.state';
import {drawerStoreState} from '../state/drawer-store.state';
import {leverageState} from '../state/leverage.state';
import {newAvatarState} from '../state/new-avatar.state';
import {
  chargeWalletItemsList,
  getNewAvatarsList,
  leverageList,
} from '../utils/fakeData';

export const useMyStore = () => {
  ///
  const state = useSearchParams()[0].get('state');
  const value = useSearchParams()[0].get('value');
  ///
  const {
    openChargeWallet,
    setOpenChargeWallet,
    openLeverage,
    setOpenLeverage,
    openNewAvatar,
    setOpenNewAvatar,
    openAllLeverage,
    setOpenAllLeverage,
    openAllAvatars,
    setOpenAllAvatars,
  } = drawerStoreState();
  const {chargeWalletInfo, setChargeWalletInfo} = chargeWalletState();
  const {leverageInfo, setLeverageInfo} = leverageState();
  const {newAvatarInfo, setNewAvatarInfo} = newAvatarState();
  const [isFunds, setIsfunds] = useState<boolean>(false);
  const [showBuyDrawer, setShowBuyDrawer] = useState<boolean>(false);
  ///
  useEffect(() => {
    if (state !== null && state == 'chargewallet') setOpenChargeWallet(true);
    else setOpenChargeWallet(false);
    if (state !== null && state == 'leverage') setOpenLeverage(true);
    else setOpenLeverage(false);
    if (state !== null && state == 'newavatar') setOpenNewAvatar(true);
    else setOpenNewAvatar(false);
    if (state !== null && state == 'all-leverage') setOpenAllLeverage(true);
    else setOpenAllLeverage(false);
    if (state !== null && state == 'all-avatars') setOpenAllAvatars(true);
    else setOpenAllAvatars(false);
  }, [state]);

  useEffect(() => {
    if (value) {
      const findDetialChargeWallet = chargeWalletItemsList.find(
        item => item.id == Number(value),
      );
      if (findDetialChargeWallet) {
        setChargeWalletInfo(findDetialChargeWallet);
      }
      const findDetialLeverage = leverageList.find(
        item => item.id == Number(value),
      );
      if (findDetialLeverage) {
        setLeverageInfo(findDetialLeverage);
      }
      const findDetialNewAvatar = getNewAvatarsList.find(
        item => item.id == Number(value),
      );
      if (findDetialNewAvatar) {
        setNewAvatarInfo(findDetialNewAvatar);
      }
    }
  }, [value]);
  ////
  return {
    openChargeWallet,
    openLeverage,
    openNewAvatar,
    openAllLeverage,
    openAllAvatars,
    chargeWalletInfo,
    leverageInfo,
    newAvatarInfo,
    setIsfunds,
    isFunds,
    setShowBuyDrawer,
    showBuyDrawer,
  };
};
