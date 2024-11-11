import {useState} from 'react';
import {Button, TextField, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import UsdInput from '../../atoms/UsdInput';
import WarningTip from '../../atoms/warningTip';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import {flex} from '@/utils/flexHelper';

type TransferDrawerProps = {
  isTransferOpen: boolean;
  handleCloseTransferDrawer?: () => void;
};
const TransferDrawer = ({
  isTransferOpen,
  handleCloseTransferDrawer,
}: TransferDrawerProps) => {
  ///
  const [amount, setAmount] = useState<number>();
  const [walletAddress, setWalletAddress] = useState<string>();
  ///
  const handleWalletAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setWalletAddress(e.target.value);
  };
  ///
  return (
    <FullPageDrawerContainer
      isOpen={isTransferOpen}
      handleCloseDrawer={handleCloseTransferDrawer}
      PageTitle="Withdraw">
      <Grid
        container
        size={12}
        spacing={'1rem'}
        sx={{
          ...flex().column().jbetween().result,
          height: 'calc(100vh - 38px)',
          px: '1rem',
          pb: '38px',
          pt: '12px',
        }}>
        <Grid container size={12}>
          <Grid size={12}>
            <Typography variant="body2" fontFamily={'Nunito Sans'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              laborum odit ratione nemo repudiandae adipisci enim molestiae
              assumenda, nulla perspiciatis hic accusantium
            </Typography>
          </Grid>
          <Grid
            size={12}
            sx={{
              '.MuiInputBase-root': {
                height: '52px',
                borderRadius: theme => theme.shape.borderRadius,
                backgroundColor: theme => theme.palette.background.paper,
              },
              ...flex().column().gap('4px').result,
            }}>
            <Typography variant="caption" fontFamily={'Nunito Sans'}>
              Recieving solena wallet address:
            </Typography>
            <TextField
              variant="outlined"
              value={walletAddress}
              onChange={handleWalletAddressChange}
              fullWidth
              placeholder="FUNGFV8DQEyzzt6Hzx2kQ4kiXhtGjV7D85qZuRcHEnpg"
              sx={{
                bgcolor: 'background.paper',
                borderRadius: theme => theme.shape.borderRadius,
              }}
            />
          </Grid>
          <Grid size={12}>
            <UsdInput
              withTopCaption
              amount={amount}
              setAmount={setAmount}
              availableAmount={54}
            />
          </Grid>
          <Grid pt={'12px'} size={12}>
            <WarningTip>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, aut magnam. Cumque, culpa! Officia, maiores?
            </WarningTip>
            <WarningTip>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, aut magnam. Cumque, culpa! Officia, maiores?
            </WarningTip>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Button
            variant="contained"
            disabled={
              ((amount === undefined || isNaN(Number(amount))) &&
                walletAddress == undefined) ||
              walletAddress === ''
            }
            fullWidth
            // onClick={handleGenerateLink}
            sx={{
              py: '1rem',
              borderRadius: theme => theme.shape.borderRadius,
              fontFamily: 'Nunito Sans',
            }}>
            request withdraw
          </Button>
        </Grid>
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default TransferDrawer;
