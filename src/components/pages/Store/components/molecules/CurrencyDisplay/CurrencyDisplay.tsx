// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {Badge, Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

type CurrencyDisplayProps = {
  amount: number;
  currency: string;
  iconUrl: string;
};

const CurrencyWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
}));

const CurrencyIcon = styled('img')({
  width: '21px',
  height: '21px',
  marginLeft: '4px',
});

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  currency,
  iconUrl,
}) => (
  <CurrencyWrapper className="currrrr">
    <Typography variant="caption" color="text.secondary">
      {amount.toFixed(2)}{' '}
      <Typography
        component="span"
        variant="caption"
        fontWeight="bold"
        fontSize="10px"
        lineHeight="11px"
        textTransform="uppercase"
        color="text.secondary">
        {currency}
      </Typography>
    </Typography>
    <Badge
      color="success"
      badgeContent="+"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      sx={{
        '.MuiBadge-badge': {
          width: '10px',
          minWidth: '10px',
          maxWidth: '10px',
          height: '10px',
          transform: 'scale(1) translate(20%, 20%)',
          padding: 'unset',
          color: '#fff',
        },
      }}>
      <CurrencyIcon src={iconUrl} alt={`${currency} icon`} />
    </Badge>
  </CurrencyWrapper>
);

export default CurrencyDisplay;
