import {Outlet} from 'react-router';
import Grid from '@mui/material/Grid2';

import {BottomNavbar} from '@/components/organisms/BottomNavbar';

export const WithBottomLNavbarLayout = () => (
  <Grid pb={10}>
    <Outlet />
    <BottomNavbar />
  </Grid>
);
