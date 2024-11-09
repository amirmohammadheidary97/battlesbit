import {useState} from 'react';
import type {FormControlProps, SelectChangeEvent} from '@mui/material';
import {Box, FormControl, MenuItem, Select, Typography} from '@mui/material';

import BitcoinImg from '@/assets/img/icons/general/bitcoin.png';
import {flex} from '@/utils/flexHelper';

const SelectionComponent = ({
  formControlProps,
  options,
  withPicture,
}: {
  formControlProps?: FormControlProps;
  options: string[];
  withPicture: boolean;
}) => {
  const [value, setValue] = useState<string>(options[0]);
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <FormControl {...formControlProps} variant="standard">
      <Select
        value={value}
        onChange={handleChange}
        renderValue={selected => (
          <Box
            sx={{
              px: '1rem',
              py: '12px',
              gap: '21px',
              ...flex().acenter().result,
            }}>
            {withPicture && (
              <img
                src={BitcoinImg}
                style={{width: '23px', height: '23px'}}
                alt="bitcoin"
              />
            )}
            <Typography
              sx={{
                font: '400 22px Nunito Sans',
              }}>
              {selected}
            </Typography>
          </Box>
        )}
        sx={{border: 'none'}}>
        {options.map(opt => (
          <MenuItem key={opt} sx={{gap: '21px'}} value={opt}>
            {withPicture && (
              <img
                src={BitcoinImg}
                style={{width: '23px', height: '23px'}}
                alt="bitcoin"
              />
            )}
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectionComponent;
