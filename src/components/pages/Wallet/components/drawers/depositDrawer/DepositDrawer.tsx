import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import DepositItem from '../../molecules/DepositItem';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import BitcoinGenerateLinkDrawer from './BitcoinGenerateLinkDrawer';
import NetworkSelectionDrawer from './NetworkSelectionDrawer';
import PaypalDrawer from './PaypalDrawer';

import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type Props = {
  isDepositopen: boolean;
  handleCloseDepositDrawer?: () => void;
};
const DepositDrawer = ({handleCloseDepositDrawer, isDepositopen}: Props) => {
  ///
  const location = useLocation();
  const navigate = useNavigate();
  /////
  const [selectedMethod, setSelectedMethod] = useState<'paypal' | 'bitcoin'>();
  const [openNetworkOptionDrawer, setOpenNetworkOptionDrawer] =
    useState<boolean>(false);
  /////
  const isBitcoinNetworkSelected = location.search.includes('network');
  const isPaypalSelected = location.search.includes('paypal');
  ///
  useEffect(() => {
    if (!isPaypalSelected && !isBitcoinNetworkSelected)
      setSelectedMethod(undefined);
  }, [isPaypalSelected, isBitcoinNetworkSelected]);

  return (
    <FullPageDrawerContainer
      isOpen={isDepositopen}
      handleCloseDrawer={handleCloseDepositDrawer}
      PageTitle="Deposit">
      <Grid
        container
        p={'1rem'}
        height={'calc(100vh - 40px)'}
        sx={{...flex().column().acenter().result}}
        size={12}>
        <Grid pb={'8px'} size={12}>
          <Typography
            variant="subtitle1"
            sx={{fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
            select payment option:
          </Typography>
        </Grid>
        <Grid rowSpacing={'1rem'} spacing={'1rem'} size={12} container>
          <DepositItem
            desc="BTC"
            title="paypal"
            setSelectedMethod={setSelectedMethod}
            selectedMethod={selectedMethod}
          />
          <DepositItem
            desc="BTC"
            title="bitcoin"
            setSelectedMethod={setSelectedMethod}
            selectedMethod={selectedMethod}
          />
        </Grid>
        <Grid size={12} container pb={'24px'} flexGrow={1}>
          <Grid alignSelf={'flex-end'} size={12}>
            <Button
              disabled={selectedMethod === undefined}
              onClick={() => {
                if (selectedMethod === 'bitcoin')
                  setOpenNetworkOptionDrawer(true);
                else {
                  navigate('?state=deposit&paypal=true');
                }
              }}
              sx={{
                width: 1,
                py: '1rem',
                borderRadius: theme.shape.borderRadius,
                fontFamily: 'Nunito Sans',
              }}
              variant="contained">
              {' '}
              continue
            </Button>
            <NetworkSelectionDrawer
              openNetworkOptionDrawer={openNetworkOptionDrawer}
              setOpenNetworkOptionDrawer={setOpenNetworkOptionDrawer}
            />
            {/*  */}
            <BitcoinGenerateLinkDrawer isOpen={isBitcoinNetworkSelected} />
            {/*  */}
            <PaypalDrawer isOpen={isPaypalSelected} />
            {/*  */}
          </Grid>
        </Grid>
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default DepositDrawer;
