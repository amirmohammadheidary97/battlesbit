import {useRef} from 'react';
import {InputAdornment, TextField} from '@mui/material';

import type {amountMode} from '../OrderForm';
import {miniSelectSlotProps} from '../utils/miniSelectStyles';

import {SelectControl} from '@/components/molecules/SelectControl';

type Props = {
  selectedAmountType: string;
  amountMode: amountMode;
  setAmountMode: React.Dispatch<React.SetStateAction<amountMode>>;
  setSelectedAmountType: React.Dispatch<React.SetStateAction<string>>;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  usedMargin: number;
  leverage: number;
  availableMargin: number;
  amountValue: number;
  setAmountValue: React.Dispatch<React.SetStateAction<number>>;
  resetAmount: () => void;
};

const amountTypes: string[] = ['BTC', 'USDT'];

const alertInput = ({ref}: {ref: any}) => {
  console.log(ref);

  ref.current.style.boxShadow = '0 0px 5px #e46c6bb3';
  setTimeout(() => {
    ref.current.style.boxShadow = 'unset';
  }, 200);
};

export const AmountInput = ({
  selectedAmountType,
  setSelectedAmountType,
  amountMode,
  setAmountMode,
  availableMargin,
  setSliderValue,
  sliderValue,
  leverage,
  amountValue,
  setAmountValue,
  resetAmount,
}: Props) => {
  //
  const inputRef: any = useRef(null);
  const onAmountChange = (e: any) => {
    const inputVal = e.target.value;
    if (isNaN(inputVal)) return;
    const val = Number(inputVal);
    if (val > availableMargin * leverage) {
      alertInput({ref: inputRef});
      return;
    }
    setAmountValue(val);
    const remainingMargin = val / leverage;
    const percent = (remainingMargin * 100) / availableMargin;
    setSliderValue(percent);
  };
  const getValue = () => {
    if (amountMode === 'value') return amountValue.toFixed(2);
    return sliderValue + '%';
  };
  const handleFocus = () => {
    if (amountMode !== 'value') setAmountMode('value');
  };
  const handleAmountTypeChange = (e: any) => {
    setSelectedAmountType(e.target.value);
    resetAmount();
  };
  //
  return (
    <>
      <TextField
        fullWidth
        label={'Amount'}
        id="filled-amount-start-adornment"
        slotProps={{
          inputLabel: {
            shrink: sliderValue !== undefined,
          },
          input: {
            ref: inputRef,
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  'div.MuiInputBase-root.MuiFilledInput-root': {
                    backgroundColor: 'transparent',
                  },
                }}>
                <SelectControl
                  selectedOption={{
                    name: selectedAmountType,
                    value: selectedAmountType,
                  }}
                  options={amountTypes.map(ot => ({name: ot, value: ot}))}
                  onChange={handleAmountTypeChange}
                  getValue={op => op.value}
                  getLabel={op => op.name}
                  slotProps={miniSelectSlotProps}
                />
              </InputAdornment>
            ),
          },
        }}
        onChange={onAmountChange}
        onFocus={handleFocus}
        variant="filled"
        value={getValue()}
      />
    </>
  );
};
