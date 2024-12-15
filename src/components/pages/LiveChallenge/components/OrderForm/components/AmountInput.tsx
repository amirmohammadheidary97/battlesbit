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
  amountValue: string | undefined;
  setAmountValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  resetAmount: () => void;
};

const amountTypes: string[] = ['BTC', 'USDT'];

const validateInput = (value: string) => {
  const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const hasOnlyAllowedChars = [...value].every(char =>
    allowedChars.includes(char),
  );
  const hasDot = value.includes('.');
  const hasSingleDot = (value.match(/\./g) || []).length <= 1;
  const floatNumbersLength = hasDot ? String(value).split('.')[1].length : 0;
  const hasFloatNumbers = floatNumbersLength > 0;
  const thereIsMaximumTwoFloatNumbers = floatNumbersLength <= 2;

  return (
    hasOnlyAllowedChars &&
    (hasFloatNumbers ? thereIsMaximumTwoFloatNumbers : true) &&
    hasSingleDot
  );
};

const alertInput = ({ref}: {ref: any}) => {
  ref.current.style.boxShadow = '0 0px 5px #e46c6bb3';
  setTimeout(() => {
    ref.current.style.boxShadow = 'unset';
  }, 200);
};

const zeroAtFirst = (val: string) => {
  if (
    String(val).length > 1 &&
    String(val).startsWith('0') &&
    !String(val).startsWith('0.')
  ) {
    const newVal = String(val).substring(1);
    return newVal;
  } else return val;
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
    if (inputVal.trim() === '') {
      setAmountValue('0');
      setSliderValue(0);
      return;
    }
    if (!validateInput(inputVal)) return;
    const val = zeroAtFirst(inputVal);
    if (Number(val) > availableMargin * leverage) {
      alertInput({ref: inputRef});
      return;
    }

    setAmountValue(val);
    const remainingMargin = Number(val) / leverage;
    const percent = (remainingMargin * 100) / availableMargin;
    setSliderValue(percent);
  };
  const getValue = () => {
    if (amountMode === 'value') return amountValue;
    return sliderValue + '%';
  };
  const handleFocus = () => {
    if (amountMode !== 'value') {
      setAmountMode('value');
      if (amountValue) {
        const floatNumbersLength = amountValue.includes('.')
          ? String(amountValue).split('.')[1].length
          : 0;
        if (floatNumbersLength > 2) {
          const newAmountValue =
            String(amountValue).split('.')[0] +
            '.' +
            String(amountValue).split('.')[1].slice(0, 2);
          setAmountValue(newAmountValue);
          setSliderValue(
            (Number(newAmountValue) * 100) / (availableMargin * leverage),
          );
        }
      }
    }
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
