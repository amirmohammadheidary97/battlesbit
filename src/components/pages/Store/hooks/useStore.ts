/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {chargeWalletState} from '../state/charge-wallet.state';
import {drawerStoreState} from '../state/drawer-store.state';
import {leverageState} from '../state/leverage.state';
import {newAvatarState} from '../state/new-avatar.state';
import {
  chargeWalletItemsList as chargeWalletList,
  getNewAvatarsList as getNewAvatarsListFakeData,
  getPackagesList as packagesListFakeData,
  leverageList as leverageListFakeData,
} from '../utils/fakeData';

import type {
  ChargeWalletItemType,
  LeverageItemType,
  NewAvatarsType,
  PackagesType,
} from '@/types/models/store';

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
  const [chargeWalletItemsList, setChargeWalletItemsList] = useState<
    ChargeWalletItemType[]
  >([]);
  const [leverageList, setLeverageList] = useState<LeverageItemType[]>([]);
  const [getNewAvatarsList, setGetNewAvatarsList] = useState<NewAvatarsType[]>(
    [],
  );
  const [packagesList, setPackagesList] = useState<PackagesType[]>([]);
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
    if (value && state?.includes('newavatar')) {
      const findDetialNewAvatar = getNewAvatarsList.find(
        item => item.id == Number(value),
      );
      if (findDetialNewAvatar) {
        setTimeout(() => {
          setNewAvatarInfo(findDetialNewAvatar);
        }, 1000);
      }
    } else {
      setNewAvatarInfo(undefined);
    }
  }, [value, state]);

  useEffect(() => {
    if (value && state?.includes('leverage')) {
      const findDetialLeverage = leverageList.find(
        item => item.id == Number(value),
      );
      if (findDetialLeverage) {
        setTimeout(() => {
          setLeverageInfo(findDetialLeverage);
        }, 1000);
      }
    } else {
      setLeverageInfo(undefined);
    }
  }, [value, state]);

  useEffect(() => {
    if (value && state?.includes('chargewallet')) {
      const findDetialChargeWallet = chargeWalletItemsList.find(
        item => item.id == Number(value),
      );
      if (findDetialChargeWallet) {
        setTimeout(() => {
          setChargeWalletInfo(findDetialChargeWallet);
        }, 1000);
      }
    } else {
      setChargeWalletInfo(undefined);
    }
  }, [value, state]);

  useEffect(() => {
    setTimeout(() => {
      setChargeWalletItemsList(chargeWalletList);
      setLeverageList(leverageListFakeData);
      setGetNewAvatarsList(getNewAvatarsListFakeData);
      setPackagesList(packagesListFakeData);
    }, 1500);
  }, []);
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
    chargeWalletItemsList,
    leverageList,
    getNewAvatarsList,
    packagesList,
  };
};
