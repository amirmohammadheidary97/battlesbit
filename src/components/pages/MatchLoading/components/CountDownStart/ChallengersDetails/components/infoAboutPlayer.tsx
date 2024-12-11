import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import InfoBox from './infoBox';

import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type Info = {
  name: string;
  level: number;
  victoryRate: number;
};
type ChallengersInfo = {
  yours: Info;
  opponent: Info;
};
const InfoAboutPlayer = ({
  challengersInfo,
  isSmashAnimationEnded,
}: {
  challengersInfo: ChallengersInfo;
  isSmashAnimationEnded: Boolean;
}) => (
  <Grid
    size={12}
    height={'3.75rem'}
    bgcolor={'#181A2080'}
    container
    sx={{
      backdropFilter: 'blur(0.25rem)',
      position: 'absolute',
      transition: '0.4s',
      opacity: isSmashAnimationEnded ? 1 : 0,
      bottom: 0,
      borderBottomLeftRadius: '0.5rem',
      borderBottomLRightRadius: '0.5rem',
      ...flex().jcenter().acenter().result,
    }}>
    <Grid size={10.5} sx={{...flex().acenter().jbetween().result, ml: 3}}>
      <InfoBox info={challengersInfo.yours} />
      <Typography
        sx={{
          font: '1.875rem Alfa Slab One',
          color: theme.palette.primary.main,
          lineHeight: '2.56rem',
        }}>
        Vs
      </Typography>
      <InfoBox info={challengersInfo.opponent} />
    </Grid>
  </Grid>
);

export default InfoAboutPlayer;
