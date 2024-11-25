import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled, useTheme} from '@mui/material/styles';

import ConfirmationDrawer from '../../../drawer/ConfirmationDrawer/ConfirmationDrawer';
import {DetailAvatarItem} from '../../molecules/DetailAvatar';
import {FundsMessageItem} from '../../molecules/FundsMessage';

import type {LeverageItemType} from '@/types/models/store';

type LeverageProps = {
  leverageInfo: LeverageItemType;
};

const LeverageWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}));

export const LeverageDetail: React.FC<LeverageProps> = ({leverageInfo}) => {
  const theme = useTheme();

  ///
  const [isFunds, setIsfunds] = useState<boolean>(false);
  const [showBuyDrawer, setShowBuyDrawer] = useState<boolean>(false);
  return (
    <LeverageWrapper>
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
          <img src={leverageInfo.iconUrl} alt={leverageInfo.currency} />
        </Grid>
        <Grid
          size={12}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-end'}
          marginTop={'100px'}>
          <DetailAvatarItem
            isFunds={isFunds}
            icon={leverageInfo.iconUrl}
            amount={leverageInfo.amount}
            currency={leverageInfo.currency}
            onClick={() => {
              if (leverageInfo.funds == 0) {
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
        <Grid size={12} padding="0 18px" display="flex" justifyContent="start">
          <Typography
            color={'test.white'}
            variant="caption"
            fontWeight={'400'}
            fontSize={'34px'}
            fontFamily="'Nunito Sans', sans-serif">
            {leverageInfo.xpCuntent}{' '}
            <Typography
              color={theme.palette.primary.main}
              component="span"
              variant="caption"
              fontFamily="'Nunito Sans', sans-serif"
              fontSize="22px"
              lineHeight="11px"
              textTransform="uppercase">
              {leverageInfo.xpValue}
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
        amount={leverageInfo.amount}
        currency={leverageInfo.currency}
        icon={leverageInfo.iconUrl}
        onClose={() => {
          setShowBuyDrawer(!showBuyDrawer);
        }}
        amount2={120}
        currency2={'up to'}
        open={showBuyDrawer}
        type="Leverage"
        walletAmount={100.9}
      />
    </LeverageWrapper>
  );
};
