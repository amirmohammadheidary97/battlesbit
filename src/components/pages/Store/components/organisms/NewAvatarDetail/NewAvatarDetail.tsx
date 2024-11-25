import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import ConfirmationDrawer from '../../../drawer/ConfirmationDrawer/ConfirmationDrawer';
import {DetailAvatarItem} from '../../molecules/DetailAvatar';
import {FundsMessageItem} from '../../molecules/FundsMessage';

import type {NewAvatarsType} from '@/types/models/store';

type NewAvatarProps = {
  newAvatarInfo: NewAvatarsType;
};

const NewAvatarWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}));

export const NewAvatarDetail: React.FC<NewAvatarProps> = ({newAvatarInfo}) => {
  ///
  const [isFunds, setIsfunds] = useState<boolean>(false);
  const [showBuyDrawer, setShowBuyDrawer] = useState<boolean>(false);
  return (
    <NewAvatarWrapper>
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
          <img src={newAvatarInfo.iconUrl} alt={newAvatarInfo.currency} />
        </Grid>
        <Grid
          size={12}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-end'}
          marginTop={'100px'}>
          <DetailAvatarItem
            isFunds={isFunds}
            paddingValue="0"
            backColor="transparent"
            icon={newAvatarInfo.iconUrl}
            amount={newAvatarInfo.amount}
            currency={newAvatarInfo.currency}
            onClick={() => {
              if (newAvatarInfo.funds == 0) {
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
        <Grid size={12} padding="0 16px" display="flex" justifyContent="start">
          <Typography
            color={'text.white'}
            variant="caption"
            fontWeight={'400'}
            fontSize={'34px'}
            fontFamily="'Nunito Sans', sans-serif">
            The Monkey King
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
        amount={newAvatarInfo.amount}
        currency={newAvatarInfo.currency}
        icon={newAvatarInfo.iconUrl}
        onClose={() => {
          setShowBuyDrawer(!showBuyDrawer);
        }}
        amount2={0}
        currency2={'The Monkey King '}
        open={showBuyDrawer}
        type="Leverage"
        walletAmount={100.9}
      />
    </NewAvatarWrapper>
  );
};
