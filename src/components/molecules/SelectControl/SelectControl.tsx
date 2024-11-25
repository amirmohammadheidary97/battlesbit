import {useId} from 'react';
import type {
  FormControlProps,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

type Option = {
  name: string;
  value: string;
};

export type SelectControlSlotProps = {
  formControlProps?: FormControlProps;
  selectProps?: Omit<SelectProps, 'id' | 'labelId' | 'value' | 'onChange'>;
};

type SelectControlProps = {
  label?: string;
  selectedOption: Option;
  options: Option[];
  onChange: (event: SelectChangeEvent<any>) => void;
  getLabel: (op: Option) => string;
  getValue: (op: Option) => string;
  slotProps: SelectControlSlotProps;
};

export const SelectControl = ({
  label,
  onChange,
  options,
  selectedOption,
  getLabel,
  getValue,
  slotProps = {formControlProps: {}, selectProps: {}},
}: SelectControlProps) => {
  const id = useId();
  return (
    <>
      <FormControl variant="filled" {...slotProps.formControlProps}>
        {label && (
          <InputLabel id={`${id}-select-filled-label`}>{label}</InputLabel>
        )}
        <Select
          labelId={`${id}-select-filled-label`}
          id={`${id}-select-filled`}
          value={getValue(selectedOption)}
          onChange={onChange}
          {...slotProps.selectProps}>
          {options.map(op => (
            <MenuItem key={getValue(op)} value={getValue(op)}>
              {getLabel(op)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
