import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {CustomIcon} from '@/components/atoms/icon';
import type {IconType} from '@/types/props/icons';
import {formatMainAndDecimal} from '@/utils/pricing';

type TUserAmount = {
  typeIcon: IconType;
  amount: number;
  currency: string;
};

const UserAmount = ({amount, currency, typeIcon}: TUserAmount) => {
  const {mainFormatted, decimalPart} = formatMainAndDecimal(Math.abs(amount));
  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Grid display={'flex'}>
        <CustomIcon
          style={{
            height: '17px',
            width: '17px',
          }}
          type={typeIcon}
          viewBox={'0 0 18 18'}
        />
      </Grid>
      <Grid display={'flex'} mt={'4px'}>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: 'Geogrotesque Wide',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'right',
            alignSelf: 'center',
          }}
          color="text.primary">
          {mainFormatted}
        </Typography>
        {decimalPart !== '00' && (
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: 'Geogrotesque Wide',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right',
              alignSelf: 'center',
            }}
            color="text.primary">
            .{decimalPart}
          </Typography>
        )}
      </Grid>
      <Grid display={'flex'} mt={'1px'}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Geogrotesque Wide',
            fontWeight: 400,
            fontSize: '8px',
            lineHeight: '100%',
            letterSpacing: '0.4%',
            textAlign: 'right',
            alignSelf: 'center',
          }}
          color="text.secondary">
          {currency}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserAmount;
