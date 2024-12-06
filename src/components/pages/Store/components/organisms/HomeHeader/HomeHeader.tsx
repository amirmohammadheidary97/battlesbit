import {useNavigate} from 'react-router';
import {IconButton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CurrencyDisplay from '../../molecules/CurrencyDisplay';

import backIcon from '@/assets/img/icons/general/back-white2.png';
import StarCoinIcon from '@/assets/img/icons/general/star2.svg';
import TetIcon from '@/assets/img/icons/general/tet.svg';

type HomeHeaderProps = {
  current: number;
  total: number;
  usdtAmount: number;
  vsdAmount: number;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  usdtAmount,
  vsdAmount,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {/*  */}
      <Grid container display={'flex'} alignContent={'center'}>
        <IconButton aria-label="backward" onClick={() => navigate(-1)}>
          <img src={backIcon} style={{width: '20px', height: '20px'}} />
        </IconButton>
        <Typography sx={{marginTop: '6px'}} fontSize={18}>
          Store
        </Typography>
      </Grid>
      {/*  */}
      <Grid size="auto" offset={'auto'}>
        <Grid size={12}>
          <CurrencyDisplay
            amount={usdtAmount}
            currency="USDt"
            iconUrl={TetIcon}
          />
        </Grid>
        <Grid size={12}>
          <CurrencyDisplay
            amount={vsdAmount}
            currency="VSD"
            iconUrl={StarCoinIcon}
          />
        </Grid>
      </Grid>
    </>
  );
};
