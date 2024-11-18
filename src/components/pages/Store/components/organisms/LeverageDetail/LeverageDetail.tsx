import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled, useTheme} from '@mui/material/styles';

import {DetailAvatarItem} from '../../molecules/DetailAvatar';

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
            icon={leverageInfo.iconUrl}
            amount={leverageInfo.amount}
            currency={leverageInfo.currency}
            onClick={() => {}}
          />
        </Grid>
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
    </LeverageWrapper>
  );
};
