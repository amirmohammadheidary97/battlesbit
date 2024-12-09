import {styled, Switch, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {languageListFakeData} from '../../../utils/fakeData';

import DarkModeImg from '@/assets/img/icons/userInfo/dark.svg';
import LightModeImg from '@/assets/img/icons/userInfo/light.svg';

type Props = {
  title: string;
  iconUrl: string;
  onCLickShowLanguage: () => void;
  onCLickShowAccountInformation: () => void;
  languageType: number;
};

const MaterialUISwitch = styled(Switch)(({theme}) => ({
  width: 80,
  height: 50,
  transform: 'translateX(14px)',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(14px) translateY(13px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(42px) translateY(13px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${DarkModeImg})`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
    borderRadius: '50%',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${LightModeImg})`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 1,
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(37, 39, 47, 1)',
    }),
  },
}));

const UserInfoItem: React.FC<Props> = ({
  iconUrl,
  title,
  onCLickShowLanguage,
  languageType,
  onCLickShowAccountInformation,
}) => (
  <Grid
    display={'flex'}
    alignItems={'center'}
    size={12}
    mb={2}
    px={2}
    onClick={() => {
      if (title == 'Change Language') {
        onCLickShowLanguage();
      }
      if (title == 'Change Account information') {
        onCLickShowAccountInformation();
      }
    }}
    justifyContent={'space-between'}
    sx={{
      backgroundColor: 'background.default',
      borderRadius: '10px',
      height: '52px',
    }}>
    <Grid container display={'flex'} alignItems={'center'}>
      <Grid container alignItems={'flex-end'} spacing={2}>
        <Grid
          sx={{
            height: '20px',
            width: '20px',
            img: {
              borderRadius: '50%',
              width: '100%',
              height: '100%',
            },
          }}>
          <img src={iconUrl} alt={title} />
        </Grid>
      </Grid>
      <Typography
        ml={1}
        variant="caption"
        fontWeight="400"
        fontSize="14px"
        lineHeight="19px"
        fontFamily="Nunito Sans"
        color={title == 'Logout' ? 'error' : 'text.white'}>
        {title}
      </Typography>
    </Grid>
    <Grid display={'flex'} justifyContent={'start'}>
      {title == 'Application Theme' && (
        <>
          <MaterialUISwitch defaultChecked={false} />
        </>
      )}
      {title == 'Change Language' && (
        <>
          <Typography
            ml={1}
            variant="caption"
            fontWeight="400"
            fontSize="14px"
            lineHeight="19px"
            fontFamily="Nunito Sans"
            color={'primary'}>
            {languageListFakeData.find(a => a.id == languageType)?.title}
          </Typography>
        </>
      )}
    </Grid>
  </Grid>
);

export default UserInfoItem;
