import {useState} from 'react';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import UsdInput from '../../atoms/UsdInput';
import WarningTip from '../../atoms/WarningTip';
import SelectionComponent from '../../molecules/BalanceTypeSelection';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import {flex} from '@/utils/flexHelper';

type PaypalDrawerProps = {
  isOpen: boolean;
  handleCloseDrawer?: () => void;
};

const optios = ['Bitcoin', 'Bitcoin2', 'Bitcoin3'];
const PaypalDrawer = ({isOpen, handleCloseDrawer}: PaypalDrawerProps) => {
  ///
  const [amount, setAmount] = useState<number>();
  ///
  return (
    <FullPageDrawerContainer
      handleCloseDrawer={handleCloseDrawer}
      isOpen={isOpen}
      PageTitle="Buy">
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
            <SelectionComponent
              formControlProps={{
                sx: {
                  bgcolor: 'background.paper',
                  borderRadius: theme => theme.shape.borderRadius,
                  width: 1,
                  '*': {fontSize: '16px !important'},
                  '.MuiSvgIcon-root': {
                    width: '1.5rem',
                    height: '1.5rem',
                    mr: '12px',
                  },
                },
              }}
              withPicture
              options={optios}
            />
          </Grid>
          <Grid size={12}>
            <UsdInput
              withTopCaption={false}
              amount={amount}
              setAmount={setAmount}
              availableAmount={27}
            />
          </Grid>
          <Grid pt={'12px'} size={12}>
            <Typography variant="body2" fontFamily={'Nunito Sans'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              laborum odit ratione nemo repudiandae adipisci enim molestiae
              assumenda, nulla perspiciatis hic accusantium ipsum esse
              voluptatum commodi dicta. Ea, dignissimos.
            </Typography>
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
            disabled={amount === undefined || isNaN(Number(amount))}
            fullWidth
            // onClick={handleGenerateLink}
            sx={{
              py: '1rem',
              borderRadius: theme => theme.shape.borderRadius,
              fontFamily: 'Nunito Sans',
            }}>
            purchase
          </Button>
        </Grid>
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default PaypalDrawer;
