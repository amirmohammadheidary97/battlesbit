import {useState} from 'react';
import type {SelectChangeEvent} from '@mui/material';
import {FormControl, MenuItem, Select, Typography} from '@mui/material';

const BalanceTypeSelection = () => {
  const [value, setValue] = useState<string>('Balance');
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  };

  const selectOptionItems: string[] = ['Balance', 'Someth', 'Another'];
  return (
    <FormControl sx={{width: '40%'}} variant="standard">
      <Select
        value={value}
        onChange={handleChange}
        renderValue={selected => (
          <Typography
            sx={{
              font: '400 22px Nunito Sans',
            }}>
            {selected}
          </Typography>
        )}
        sx={{border: 'none'}}>
        {selectOptionItems.map(opt => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BalanceTypeSelection;
