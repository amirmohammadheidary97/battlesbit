import type {FC} from 'react';
import {Box, FormControl, Input, InputAdornment} from '@mui/material';
import Grid from '@mui/material/Grid2';

import searchIcon from '@/assets/img/icons/general/search.png';

type ISearchBoxProps = {
  size: number;
};

const commonStyles = {
  border: '1px solid #595959',
  // border: 1,
  width: '100%',
  height: '3rem',
  px: 2,
};

export const SearchBox: FC<ISearchBoxProps> = ({size}) => (
  <Grid size={size}>
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'start'}
      alignItems={'center'}
      sx={{...commonStyles, borderRadius: '14px'}}>
      <FormControl variant="standard" sx={{width: '100%'}}>
        <Input
          id="input-with-icon-adornment"
          disableUnderline
          sx={{width: '100%', border: 'none'}}
          placeholder="Find Your Challenge"
          startAdornment={
            <InputAdornment position="start">
              <img
                src={searchIcon}
                style={{width: '1.5rem', height: '1.5rem'}}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  </Grid>
);
