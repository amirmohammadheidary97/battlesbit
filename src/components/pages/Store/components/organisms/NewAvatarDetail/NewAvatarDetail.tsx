import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import {DetailAvatarItem} from '../../molecules/DetailAvatar';

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

export const NewAvatarDetail: React.FC<NewAvatarProps> = ({newAvatarInfo}) => (
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
          paddingValue="0"
          backColor="transparent"
          icon={newAvatarInfo.iconUrl}
          amount={newAvatarInfo.amount}
          currency={newAvatarInfo.currency}
          onClick={() => {}}
        />
      </Grid>
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
  </NewAvatarWrapper>
);
