import {Outlet} from 'react-router';
import Grid from '@mui/material/Grid2';

export const GlobalLayout = () => (
  <Grid
    container
    sx={{
      paddingTop: 'env(safe-area-inset-top)',
      paddingRight: 'env(safe-area-inset-right)',
      paddingLeft: 'env(safe-area-inset-left)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
    <Outlet />
  </Grid>
);
