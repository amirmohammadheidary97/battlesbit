import Grid from '@mui/material/Grid2';

import CurrencyDisplay from './CurrencyDisplay';
import {PlayerLevelProgress} from './PlayerLevelProgress';

import FakeAvatarIcon from '@/assets/img/icons/avatars/avatar1.svg';
import StarCoinIcon from '@/assets/img/icons/general/star2.svg';
import TetIcon from '@/assets/img/icons/general/tet.svg';

type HomeHeaderProps = {
  current: number;
  total: number;
  usdtAmount: number;
  vsdAmount: number;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  current,
  total,
  usdtAmount,
  vsdAmount,
}) => {
  const progress = (current / total) * 100;

  return (
    <>
      {/*  */}
      <Grid size="auto" container alignItems={'flex-end'} spacing={2}>
        <Grid
          size="auto"
          sx={{
            height: '42px',
            img: {
              borderRadius: '0.75rem',
            },
          }}>
          <img src={FakeAvatarIcon} alt="User Name" />
        </Grid>
        <Grid size={'grow'} container>
          <PlayerLevelProgress progress={progress} total={100} />
        </Grid>
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
