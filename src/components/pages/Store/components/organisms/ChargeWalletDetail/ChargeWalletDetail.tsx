import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled, useTheme} from '@mui/material/styles';

import ConfirmationDrawer from '../../../drawer/ConfirmationDrawer/ConfirmationDrawer';
import {DetailAvatarItem} from '../../molecules/DetailAvatar';
import {FundsMessageItem} from '../../molecules/FundsMessage';

import type {ChargeWalletItemType} from '@/types/models/store';

type ChargeWalletProps = {
  chargeWalletInfo: ChargeWalletItemType;
};

const ChargeWalletWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}));

export const ChargeWalletDetail: React.FC<ChargeWalletProps> = ({
  chargeWalletInfo,
}) => {
  const theme = useTheme();

  ///
  const [isFunds, setIsfunds] = useState<boolean>(false);
  const [showBuyDrawer, setShowBuyDrawer] = useState<boolean>(false);
  return (
    <ChargeWalletWrapper>
      <Grid container spacing={2} display="flex">
        <Grid
          position={'absolute'}
          sx={{
            img: {
              width: '100%',
              height: '329px',
              filter: 'brightness(40%) blur(4px)',
            },
          }}>
          <img src={chargeWalletInfo.iconUrl} alt={chargeWalletInfo.currency} />
        </Grid>
        <Grid
          size={12}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-end'}
          marginTop={'100px'}>
          <DetailAvatarItem
            icon={chargeWalletInfo.iconUrl}
            amount={chargeWalletInfo.amountTwo}
            currency={chargeWalletInfo.currencyTwo}
            isFunds={isFunds}
            onClick={() => {
              if (chargeWalletInfo.funds == 0) {
                setIsfunds(true);
              }
            }}
          />
        </Grid>
        {isFunds && (
          <Grid size={12} padding={'0px 20px'} marginBottom={'8px'}>
            <FundsMessageItem
              onClick={() => {
                setShowBuyDrawer(!showBuyDrawer);
              }}
              description="please charge your wallet to get new items"
              errorMessage="Insufficient funds"
            />
          </Grid>
        )}
        <Grid size={12} display="flex" justifyContent="center">
          <Typography
            color={theme.palette.primary.main}
            variant="caption"
            fontWeight={'800'}
            fontSize={'34px'}
            fontFamily="'Nunito Sans', sans-serif">
            {chargeWalletInfo.amount}{' '}
            <Typography
              component="span"
              variant="caption"
              fontFamily="'Nunito Sans', sans-serif"
              fontSize="22px"
              lineHeight="11px"
              textTransform="uppercase">
              {chargeWalletInfo.currency}
            </Typography>
          </Typography>
        </Grid>
        <Grid display="flex" flexDirection="column" padding={'20px'}>
          <Typography
            color="text.secondary"
            component="span"
            variant="caption"
            fontFamily="'Nunito Sans', sans-serif"
            fontSize="16px"
            fontWeight={'400'}
            lineHeight="11px">
            Description:
          </Typography>
          <Typography
            color="text.secondary"
            component="span"
            variant="caption"
            marginTop="10px"
            textAlign="justify"
            fontFamily="'Nunito Sans', sans-serif"
            fontSize="14px"
            fontWeight={'400'}
            lineHeight="20px">
            lorem aa lorem lorem aa lorem lorem aa lorem lorem aa lorem lorem aa
            lorem lorem aa lorem lorem aa lorem lorem aa lorem lorem aa lorem
            lorem aa lorem lorem aa lorem lorem aa lorem lorem aa lorem lorem aa
            lorem lorem aa lorem lorem aa lorem lorem aa lorem lorem aa lorem
            lorem aa lorem lorem aa lorem lorem aa lorem lorem aa lorem
          </Typography>
        </Grid>
      </Grid>
      <ConfirmationDrawer
        amount={chargeWalletInfo.amount}
        currency={chargeWalletInfo.currency}
        icon={chargeWalletInfo.iconUrl}
        onClose={() => {
          setShowBuyDrawer(!showBuyDrawer);
        }}
        amount2={chargeWalletInfo.amountTwo}
        currency2={chargeWalletInfo.currencyTwo}
        open={showBuyDrawer}
        type="ChargeWallet"
        walletAmount={100.9}
      />
    </ChargeWalletWrapper>
  );
};
