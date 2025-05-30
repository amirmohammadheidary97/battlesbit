import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomXpProgresBar from '../CustomXpProgresBar';

import ningaBarValueImage from '@/assets/img/icons/Subtract.png';

const XpProgressBar = ({progress = 50}) => (
  <Box width={'155px'} position={'relative'}>
    <Grid>
      <CustomXpProgresBar>
        <foreignObject x="0" y="0" width="100%" height="18">
          <Box
            sx={{
              width: `${progress}%`,
              height: '20px',
              backgroundImage: `url(${ningaBarValueImage})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'contain',
            }}></Box>
        </foreignObject>
      </CustomXpProgresBar>
    </Grid>
  </Box>
);

export default XpProgressBar;
