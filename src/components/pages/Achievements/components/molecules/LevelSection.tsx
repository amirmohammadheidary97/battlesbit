import {Box, Icon, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import TitleValueInfo from '../atoms/TitleValueInfo';

import Coin from '@/assets/img/icons/general/coin.svg?react';
import Ninja from '@/assets/img/icons/general/ninja.svg?react';
import Xp from '@/assets/img/icons/general/xp.svg?react';
import {flex} from '@/utils/flexHelper';

const LevelSection = () => (
  <Grid size={12} container px={2}>
    <Grid
      size={12}
      container
      p={'1rem'}
      justifyContent={'space-between'}
      alignItems={'center'}
      bgcolor={'background.paper'}
      sx={{
        borderRadius: theme => theme.shape.borderRadius,
        height: '9.78125rem',
      }}>
      <Grid size={8} sx={{...flex().column().acenter().gap('1.5rem').result}}>
        <Box sx={{display: 'flex', gap: '0.56rem', width: 1}}>
          <Typography sx={{fontFamily: 'Alfa Slab One', fontSize: '3.5rem'}}>
            23
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Alfa Slab One',
              fontSize: '1.6875rem',
              lineHeight: '2.31rem',
              alignSelf: 'end',
              //  bgcolor:'red'
            }}>
            Level
          </Typography>
        </Box>
        <Box sx={{...flex().column().gap('0.375rem').result, width: 1}}>
          <Typography variant="caption">Next Level Rewards:</Typography>
          <Box sx={{...flex().acenter().jstart().gap('0.375rem').result}}>
            <TitleValueInfo
              img={Coin}
              title="+24.00"
              fs="0.875rem"
              ml="0.125rem"
            />
            <TitleValueInfo
              img={Coin}
              title="+24.00"
              fs="0.875rem"
              ml="0.125rem"
            />
            <TitleValueInfo
              img={Xp}
              title="+24.00"
              fs="0.875rem"
              ml="0.125rem"
            />
          </Box>
        </Box>
      </Grid>
      <Grid size={3} sx={{...flex().jcenter().astart().result}}>
        <Icon component={Ninja} sx={{scale: 6.8, mt: -2}} />
      </Grid>
    </Grid>
  </Grid>
);

export default LevelSection;
