import {useState} from 'react';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import UsdInput from '../../atoms/UsdInput';
import WarningTip from '../../atoms/warningTip';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {flex} from '@/utils/flexHelper';

const TransferDrawer = ({
  isTransferOpen,
  handleCloseTransferDrawer,
}: {
  isTransferOpen: boolean;
  handleCloseTransferDrawer: () => void;
}) => {
  const [amount, setAmount] = useState<any>();
  return (
    <FullPageDrawerContainer
      isOpen={isTransferOpen}
      handleCloseDrawer={handleCloseTransferDrawer}>
      <>
        <BackwardTitle title="Transfer" />
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
                assumenda, nulla perspiciatis hic accusantium ipsum esse
                voluptatum commodi dicta. Ea, dignissimos.
              </Typography>
            </Grid>
            <Grid size={12}>
              <UsdInput withCaption amount={amount} setAmount={setAmount} />
            </Grid>
            <Grid size={12}>
              <UsdInput withCaption amount={amount} setAmount={setAmount} />
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
              //   disabled={amount === undefined || isNaN(Number(amount))}
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
      </>
    </FullPageDrawerContainer>
  );
};

export default TransferDrawer;
