import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import XpProgressBar from '../../atoms/XpProgressBar';

type TUserInfo = {
  image: string;
  name: string;
  level: number;
  xp: number;
};

const UserInfo = ({image, name, level, xp}: TUserInfo) => (
  <Grid
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'space-between'}
    alignItems={'center'}>
    <Grid display={'flex'} alignItems={'center'}>
      <img
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
        }}
        src={image}
        alt={name}
      />
      <Grid display={'flex'} ml={'8px'}>
        <Typography
          variant="subtitle1"
          color="text.primary"
          noWrap
          sx={{
            fontFamily: 'Geogrotesque Wide',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
          }}>
          {name}
        </Typography>
      </Grid>
    </Grid>
    <Grid
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      sx={{
        position: 'absolute',
        bottom: 1,
        right: 0,
      }}
      size={12}>
      <Grid display={'flex'} justifyContent={'center'} width={'155px'}>
        <Typography
          color="#FFFFFF"
          sx={{
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0.4%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
          }}>
          LVL {level}
        </Typography>
      </Grid>
      <Grid display={'flex'} justifyContent={'center'} size={12} width={'100%'}>
        <XpProgressBar progress={xp} />
      </Grid>
    </Grid>
  </Grid>
);

export default UserInfo;
