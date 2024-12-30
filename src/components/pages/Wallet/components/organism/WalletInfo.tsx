import {Suspense, useState} from 'react';
import {Box, Icon, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import NavigateButton from '../atoms/NavigateButtons';
import SingleSelectionDrawer from '../drawers/depositDrawer/SingleSelectionDrawer';
import type {TBalanceType} from '../fakeData/data';
import {navButton} from '../fakeData/data';
import WalletBalanceAmount from '../molecules/MoneyAmount';

import Arrow from '@/assets/img/icons/general/arrow-up.svg?react';
import {flex} from '@/utils/flexHelper';
import {numberWithCommas} from '@/utils/money-number-fromatter';

const WalletInfo = () => {
  const [openBalanceDrawer, setOpenBalanceDrawer] = useState<boolean>(false);
  const [selectedBalanceType, setSelectedBalanceType] =
    useState<TBalanceType>('Balance');
  ///
  return (
    <Stack
      useFlexGap
      gap={'0.25rem'}
      sx={{
        width: 1,
        position: 'relative',
        zIndex: '3 !important',
      }}>
      <Box sx={{...flex().jcenter().acenter().gap('1rem').result, width: 1}}>
        {/* wallet balance */}
        <WalletBalacnceContainer
          selectedBalanceType={selectedBalanceType}
          onClick={() => setOpenBalanceDrawer(true)}
        />
        {/*  */}
      </Box>
      {/* info about wallet */}
      <WalletBalanceAmount floatSize="28px" integerSize="48px" amount={12500} />
      <Grid container alignItems={'center'} size={12}>
        <Grid size={7}>
          <Typography variant="caption">
            VSD balance: $ {`${numberWithCommas(12500)}`}
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
          size={5}>
          <Typography variant="caption">
            Pnl:{' '}
            <Typography variant="caption" sx={{color: 'success.main'}}>
              +{numberWithCommas(200.6)}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{...flex().acenter().jbetween().result, width: 1, gap: '8px'}}>
        {navButton.map(item => (
          <NavigateButton
            icon={item.icon}
            title={item.title}
            key={item.title}
          />
        ))}
      </Box>
      <Suspense>
        <SingleSelectionDrawer
          openNetworkOptionDrawer={openBalanceDrawer}
          type="balance"
          setOpenNetworkOptionDrawer={setOpenBalanceDrawer}
          selectedBalanceType={selectedBalanceType}
          setSelectedBalanceType={setSelectedBalanceType}
        />
      </Suspense>
    </Stack>
  );
};

export default WalletInfo;

const WalletBalacnceContainer = ({
  onClick,
  selectedBalanceType,
}: {
  onClick: () => void;
  selectedBalanceType: TBalanceType;
}) => (
  <Box
    onClick={onClick}
    sx={{
      ...flex().jcenter().gap(2).acenter().result,
      svg: {
        transform: 'rotate(180deg)',
        color: '#fff',
      },
    }}>
    <Typography sx={{fontSize: '22px', lineHeight: '30.01px'}}>
      {selectedBalanceType}
    </Typography>
    <Icon component={Arrow} fontSize={'small'} />
  </Box>
);
