import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {Box, Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import DepositItem from '../../molecules/DepositItem';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import BitcoinGenerateLinkDrawer from './BitcoinGenerateLinkDrawer';
import NetworkSelectionDrawer from './NetworkSelectionDrawer';
import PaypalDrawer from './PaypalDrawer';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type Props = {
  isDepositopen: boolean;
  handleCloseDepositDrawer: () => void;
};
const DepositDrawer = ({handleCloseDepositDrawer, isDepositopen}: Props) => {
  /////
  const [selectedMethod, setSelectedMethod] = useState<'paypal' | 'bitcoin'>();
  /////
  const [openNetworkOptionDrawer, setOpenNetworkOptionDrawer] =
    useState<boolean>(false);
  /////
  // const [openPaypalDrawer, setOpenPaypalDrawer] = useState<boolean>(false);
  /////
  const isBitcoinNetworkSelected = useLocation().search.includes('network');
  ///
  const isPaypalSelected = useLocation().search.includes('paypal');
  const navigate = useNavigate();
  /////
  // const handleCloseDrawer = () => {
  //   if (selectedMethod === 'bitcoin') {
  //     setOpenNetworkOptionDrawer(false);
  //   } else setOpenPaypalDrawer(false);
  // };
  return (
    <FullPageDrawerContainer
      isOpen={isDepositopen}
      handleCloseDrawer={handleCloseDepositDrawer}>
      <Box>
        <BackwardTitle title={'Deposit'} />
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
                    // setOpenPaypalDrawer(true);
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
              <BitcoinGenerateLinkDrawer
                handleCloseDrawer={() => {}}
                isOpen={isBitcoinNetworkSelected}
              />
              <PaypalDrawer
                handleCloseDrawer={() => {}}
                isOpen={isPaypalSelected}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </FullPageDrawerContainer>
  );
};

export default DepositDrawer;
