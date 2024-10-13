import {Box, Typography, useTheme} from '@mui/material';

import {flex} from '@/utils/flexHelper';

type props = {
  title: string;
  value: number | string;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  valueVariant?: 'h6' | 'overline';
  type: 'pnl' | 'price' | 'other';
};

export const PositionTitleValue = ({
  title,
  value,
  alignItems = 'flex-start',
  valueVariant = 'overline',
  type,
}: props) => {
  //
  const theme = useTheme();
  const getValueColor = () => {
    if (type === 'price') return theme.palette.primary.main;
    else if (type === 'other') return theme.palette.text.primary;
    else {
      if (Number(value) > 0) return theme.palette.success.main;
      return theme.palette.error.main;
    }
  };
  //
  return (
    <Box
      sx={{
        ...flex().column().a(alignItems).gap('0.25rem').result,
      }}>
      <Typography variant="caption" color={theme.palette.text.secondary}>
        {title}
      </Typography>
      <Typography variant={valueVariant} color={getValueColor()}>
        {value}
        {type === 'pnl' && title.toLowerCase() === 'pnl%' ? '%' : ''}
      </Typography>
    </Box>
  );
};
