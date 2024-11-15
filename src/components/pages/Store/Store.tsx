import Grid from '@mui/material/Grid2';

import {HomeHeader} from './components/organisms/HomeHeader';

const Store = () => {
  return (
    <Grid
      container
      spacing={2}
      className="hide-scrollbar"
      sx={{
        overflowY: 'auto',
        display: 'flex',
        p: 2,
        pb: '5.5rem',
      }}>
      <Grid size={12} container spacing={3}>
        <HomeHeader
          current={123}
          total={200}
          usdtAmount={1234}
          vsdAmount={5467}
        />
      </Grid>
    </Grid>
  )
}

export default Store