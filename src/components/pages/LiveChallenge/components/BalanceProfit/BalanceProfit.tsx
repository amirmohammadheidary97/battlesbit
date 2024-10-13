import {forwardRef} from 'react';
import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  role: 'balance' | 'profit';
  value: number | string;
  unit: string;
};

export const BalanceProfit = forwardRef(
  ({role, unit, value}: Props, ref: any) => {
    //
    const theme = useTheme();
    const getValueColor = () => {
      if (role === 'balance') {
        return theme.palette.primary.main;
      }
      if (Number(value) > 0) {
        return theme.palette.success.main;
      }
      return theme.palette.error.main;
    };
    //
    return (
      <Grid
        ref={ref}
        container
        size={12}
        spacing={0.25}
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          padding: '0.75rem 1rem 0.75rem 1rem',
        }}>
        <Grid size={12}>
          <Typography
            variant="caption"
            color={theme.palette.text.primary}
            lineHeight={'16.37px'}>
            {role === 'balance' ? 'Balance' : 'Profit'}
          </Typography>
        </Grid>
        <Grid size={12} container alignItems={'flex-end'}>
          <Grid size="auto">
            <Typography
              variant="h6"
              fontWeight={'600'}
              color={getValueColor()}
              lineHeight={'24.55px'}>
              {role === 'profit' ? (Number(value) > 0 ? '+' : '-') : ''}
              {value}
            </Typography>
          </Grid>
          <Grid size="auto">
            <Typography
              variant="overline"
              fontWeight={'700'}
              color={getValueColor()}
              mt={'auto'}
              lineHeight={'11px'}>
              {unit}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  },
);
