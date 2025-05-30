// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {Box, Grid2 as Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import {CustomIcon} from '@/components/atoms/icon';
import type {IconType} from '@/types/props/icons';

type CurrencyDisplayProps = {
  amount: number;
  iconType: IconType;
  isItems?: boolean;
  positionLeftIcon?: number;
};

const CurrencyWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '73px',
  padding: theme.spacing(0.9, 0),
  borderRadius: theme.shape.borderRadius,
}));

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  iconType,
  isItems,
  positionLeftIcon = -2,
}) => (
  <CurrencyWrapper className="currrrr">
    <Grid position={'absolute'} left={positionLeftIcon} top={3}>
      <CustomIcon type={iconType} />
    </Grid>
    <Grid
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        backgroundColor: 'background.paper',
        width: '100%',
        height: '17px',
        borderRadius: '4px',
      }}>
      <Typography
        variant="caption"
        fontSize={10.46}
        color="text.primary"
        lineHeight={11.51}>
        {/* {amount.toFixed(2)}{' '} */}
        {amount}
      </Typography>
    </Grid>
    {isItems && (
      <Grid position={'absolute'} right={-10} top={9}>
        <CustomIcon type={'plusGreen'} />
      </Grid>
    )}
  </CurrencyWrapper>
);

export default CurrencyDisplay;
