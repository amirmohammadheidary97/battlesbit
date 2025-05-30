import type {FC} from 'react';
import {Box, FormControl, Input, InputAdornment} from '@mui/material';
import Grid from '@mui/material/Grid2';

import searchIcon from '@/assets/img/icons/general/search.png';

type ISearchBoxProps = {
  size: number | 'auto' | 'grow';
};

const commonStyles = {
  border: '1px solid #595959',
  width: '100%',
  height: '2.5rem',
  px: 2,
};

export const SearchBox: FC<ISearchBoxProps> = ({size}) => (
  <Grid size={size}>
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'start'}
      alignItems={'center'}
      sx={{...commonStyles, borderRadius: '12px'}}>
      <FormControl variant="standard" sx={{width: '100%'}}>
        <Input
          id="input-with-icon-adornment"
          disableUnderline
          sx={{width: '100%', border: 'none', fontSize: '0.875rem'}}
          placeholder="Find Your Challenge"
          startAdornment={
            <InputAdornment position="start">
              <img
                src={searchIcon}
                style={{width: '1.2rem', height: '1.2rem'}}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  </Grid>
);
