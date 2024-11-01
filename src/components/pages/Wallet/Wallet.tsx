import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import DepositDrawer from './components/drawers/depositDrawer.tsx/DepositDrawer';
import ScrollableList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {flex} from '@/utils/flexHelper';

const Wallet = () => {
  const param = useSearchParams()[0].get('state');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  // const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (param !== null) setOpenDrawer(true);
    else setOpenDrawer(false);
  }, [param]);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  // const [selectedMethod, setSelectedMethod] = useState<
  //   'paypal' | 'bitcoin' | undefined
  // >();

  return (
    <Grid
      size={12}
      container
      sx={{
        height: 'calc(100vh - 90px)',
        justifyContent: 'center',
      }}>
      <Grid
        size={8.2}
        sx={{
          height: '50vh',
          ...flex().jcenter().aend().result,
          pb: 5,
          gap: 0,
        }}>
        <WalletInfo />
      </Grid>
      <ScrollableList
        containerProps={{bgcolor: 'background.default'}}
        isTransaction
        title="Transactions"
      />
      {/* <Drawer
        anchor="right"
        open={openDrawer}
        keepMounted={false}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100vh',
            backgroundColor: 'background.default',
            px: '1rem',
          },
        }}>
        <BackwardTitle title={param ?? ''} />
        <Grid
          container
          pt={'1rem'}
          height={'calc(100vh - 20px)'}
          sx={{...flex().column().acenter().result}}
          size={12}>
          <Grid size={12}>
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
                onClick={() => setOpen(true)}
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
              <Drawer
                open={open}
                sx={{
                  '& .MuiDrawer-paper': {
                    height: 'auto',
                    bgcolor: 'transparent',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                  },
                  '.MuiModal-backdrop': {
                    bgcolor: 'transparent',
                  },
                }}
                anchor="bottom"
                onClose={() => setOpen(false)}>
                <ScrollableList
                  containerProps={{
                    bgcolor: 'background.paper',
                  }}
                  isTransaction={false}
                  title="Network"
                  height="390px"
                />
              </Drawer>
            </Grid>
          </Grid>
        </Grid>
      </Drawer> */}
      <DepositDrawer
        handleCloseDepositDrawer={handleCloseDrawer}
        isDepositopen={openDrawer}
      />
    </Grid>
  );
};
export default Wallet;
