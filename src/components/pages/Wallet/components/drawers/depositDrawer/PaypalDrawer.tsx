import {Suspense, useState} from 'react';
import {Box, Button, Icon, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import UsdInput from '../../atoms/UsdInput';
import WarningTip from '../../atoms/WarningTip';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import SingleSelectionDrawer from './SingleSelectionDrawer';

import Arrow from '@/assets/img/icons/general/arrow-up.svg?react';
import BitcoinImg from '@/assets/img/icons/general/bitcoin.png';
import {flex} from '@/utils/flexHelper';

type PaypalDrawerProps = {
  isOpen: boolean;
  handleCloseDrawer?: () => void;
};

const options = ['Bitcoin', 'Bitcoin2', 'Bitcoin3'];
///
const PaypalDrawer = ({isOpen, handleCloseDrawer}: PaypalDrawerProps) => {
  ///
  const [amount, setAmount] = useState<number>();
  const [selectedCurrency, setSelectedCurrency] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
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
            {/* Currency Selection */}
            <CurrencyContainer
              onClick={() => setOpen(true)}
              selectedCurrency={selectedCurrency}
            />
            {/*  */}
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
        <Suspense>
          <SingleSelectionDrawer
            openNetworkOptionDrawer={open}
            setOpenNetworkOptionDrawer={setOpen}
            type="paypal"
            options={options}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
        </Suspense>
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default PaypalDrawer;

const CurrencyContainer = ({
  onClick,
  selectedCurrency,
}: {
  onClick: () => void;
  selectedCurrency?: string;
}) => (
  <Box
    onClick={onClick}
    sx={{
      px: '1rem',
      py: '12px',
      gap: '21px',
      ...flex().acenter().jbetween().result,
      bgcolor: 'background.paper',
      borderRadius: theme => theme.shape.borderRadius,
      svg: {
        transform: 'rotate(180deg)',
        color: '#fff',
      },
    }}>
    <Box sx={{...flex().acenter().gap('21px').result}}>
      <img
        src={BitcoinImg}
        style={{width: '23px', height: '23px'}}
        alt="bitcoin"
      />

      <Typography variant="body1">
        {selectedCurrency ?? 'Select Currency'}
      </Typography>
    </Box>
    <Icon component={Arrow} fontSize={'small'} />
  </Box>
);
