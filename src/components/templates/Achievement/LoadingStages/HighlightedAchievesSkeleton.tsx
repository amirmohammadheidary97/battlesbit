import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const HighlightedAchievesSkeleton = () => (
  <Grid size={12} p={'1rem'} sx={{...flex().column().gap('0.5rem').result}}>
    <Typography sx={{fontFamily: 'Nunito Sans'}} variant="caption">
      <Skeleton variant="text" height={36} width={'100%'} />
    </Typography>
    <Box width={1} sx={{...flex().acenter().jbetween().gap('4px').result}}>
      {Array.from({length: 6}).map((_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Skeleton variant="circular" width={'50px'} height={'50px'} />
          <Typography
            fontWeight={400}
            lineHeight={'13.69px'}
            fontSize={'10px'}
            width={'100%'}
            fontFamily={'Alfa Slab One'}>
            <Skeleton variant="text" width={'100%'} />
          </Typography>
        </Box>
      ))}
    </Box>
  </Grid>
);

export default HighlightedAchievesSkeleton;
