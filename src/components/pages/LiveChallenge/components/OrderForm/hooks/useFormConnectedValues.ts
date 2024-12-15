/* eslint-disable @typescript-eslint/no-unused-vars */
import {useDeferredValue, useMemo, useState} from 'react';

type Props = {
  availableMargin: number;
};

export const useConnectedValues = ({availableMargin}: Props) => {
  const [amountValue, setAmountValue] = useState<string | undefined>('0');
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [leverage, setLeverage] = useState<number>(1);
  //
  const usedMargin = useMemo(
    () => (sliderValue / 100) * availableMargin,
    [sliderValue, availableMargin],
  );
  const profit = useMemo(() => leverage * usedMargin, [usedMargin, leverage]);
  const defferedUsedMargin = useDeferredValue(usedMargin);
  const defferedProfit = useDeferredValue(profit);
  const resetAmount = () => {
    setSliderValue(0);
    setAmountValue('0');
    setLeverage(1);
  };
  //
  return {
    usedMargin,
    profit,
    defferedUsedMargin,
    defferedProfit,
    //
    amountValue,
    setAmountValue,
    sliderValue,
    setSliderValue,
    leverage,
    setLeverage,
    //
    resetAmount,
  };
};
