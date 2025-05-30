import Grid from '@mui/material/Grid2';

import CurrencyDisplay from './CurrencyDisplay';
import {PlayerLevelProgress} from './PlayerLevelProgress';

import player1 from '@/assets/img/icons/avatars/player1.png';
import {CustomIcon} from '@/components/atoms/icon';

type HomeHeaderProps = {
  current: number;
  total: number;
  usdtAmount: number;
  vsdAmount: number;
  level: number;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  current,
  total,
  usdtAmount,
  vsdAmount,
  level,
}) => {
  const progress = (current / total) * 100;

  return (
    <Grid
      container
      size={12}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      {/*  */}
      <Grid container alignItems={'flex-end'} spacing={1}>
        <Grid
          size="auto"
          position={'relative'}
          sx={{
            height: '45px',
            width: '45px',
            img: {
              borderRadius: '0.75rem',
              aspectRatio: 1,
              width: 1,
              maxWidth: '100%',
            },
          }}>
          <img src={player1} alt="User Name" />
          <Grid position={'absolute'} right={-9} bottom={-15}>
            <CustomIcon type="setting" />
          </Grid>
        </Grid>
        <Grid size={'grow'} container>
          <PlayerLevelProgress level={level} progress={progress} total={100} />
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        display={'flex'}
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'space-between'}>
        <Grid size={12}>
          <CurrencyDisplay
            positionLeftIcon={-4}
            amount={usdtAmount}
            iconType={'humanCoin'}
            isItems={true}
          />
        </Grid>
        <Grid size={12}>
          <CurrencyDisplay amount={vsdAmount} iconType={'cup'} />
        </Grid>
      </Grid>
    </Grid>
  );
};
