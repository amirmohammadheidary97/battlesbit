import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import InfoBox from './InfoBox';

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
    width={'100%'}
    height={'60px'}
    bgcolor={'#181A2080'}
    container
    sx={{
      backdropFilter: 'blur(4px)',
      position: 'absolute',
      transition: '0.4s',
      opacity: isSmashAnimationEnded ? 1 : 0,
      bottom: 0,
      borderBottomLeftRadius: '8px',
      borderBottomLRightRadius: '8px',
      ...flex().jcenter().acenter().result,
    }}>
    <Grid size={8} sx={{...flex().acenter().jbetween().result}}>
      <InfoBox info={challengersInfo.yours} />
      <Typography
        sx={{
          font: '30px Alfa Slab One',
          color: theme.palette.primary.main,
        }}>
        Vs
      </Typography>
      <InfoBox info={challengersInfo.opponent} />
    </Grid>
  </Grid>
);

export default InfoAboutPlayer;
