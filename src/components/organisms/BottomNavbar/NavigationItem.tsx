// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';

type NavigationItemProps = {
  icon: string;
  label: string;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="button"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
      }}>
      <Box
        component="img"
        src={icon}
        alt={`${label} icon`}
        loading="lazy"
        sx={{
          aspectRatio: '1',
          objectFit: 'contain',
          objectPosition: 'center',
          width: 28,
        }}
      />
      <Typography
        variant="caption"
        sx={{
          color: theme.palette.text.secondary,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          letterSpacing: '0.04px',
          fontSize: '10px',
          fontFamily: 'Nunito Sans, sans-serif',
          fontWeight: 400,
          marginTop: '4px',
        }}>
        {label}
      </Typography>
    </Box>
  );
};
