import {Typography} from '@mui/material';

import {TitleValue} from '@/components/molecules/TitleValue';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper.ts';
import {numberWithCommas} from '@/utils/money-number-fromatter.ts';

type Props = {
  availableMargin: number;
  usedMargin: number;
};

export const ShowMargin = ({availableMargin, usedMargin}: Props) => (
  <>
    {/* Free Margin */}
    <TitleValue
      title={
        <Typography
          variant="caption"
          lineHeight={'16.37px'}
          color={theme.palette.text.secondary}>
          Available Margin
        </Typography>
      }
      value={
        <Typography
          variant="caption"
          lineHeight={'16.37px'}
          color={theme.palette.text.secondary}>
          {numberWithCommas(availableMargin)} USDT
        </Typography>
      }
      containerSX={{
        ...flex().row().jbetween().abaseline().result,
        justifyContent: 'space-between',
        width: '100%',
        marginTop: theme.spacing(-1),
      }}
    />
    {/* Used Margin */}
    <TitleValue
      title={
        <Typography
          variant="caption"
          lineHeight={'16.37px'}
          color={theme.palette.text.secondary}>
          Margin
        </Typography>
      }
      value={
        <Typography
          variant="caption"
          lineHeight={'16.37px'}
          color={theme.palette.text.secondary}>
          {numberWithCommas(usedMargin)} USDT
        </Typography>
      }
      containerSX={{
        ...flex().row().jbetween().abaseline().result,
        justifyContent: 'space-between',
        width: '100%',
        marginTop: theme.spacing(-1),
        mt: 0.5,
      }}
    />
  </>
);
