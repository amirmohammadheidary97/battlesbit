import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import timeIcon from '@/assets/img/icons/general/time.png';
import {SearchBox} from '@/components/molecules/SearchBox';

export const SearchBar = () => (
  <Grid mt={2} container spacing={1}>
    <SearchBox size={'grow'} />
    <Grid size={'auto'}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          border: '1px solid #595959',
          height: '2.5rem',
          aspectRatio: 1,
          borderRadius: '12px',
        }}>
        <img src={timeIcon} style={{width: '1.5rem', height: '1.5rem'}} />
      </Box>
    </Grid>
  </Grid>
);
