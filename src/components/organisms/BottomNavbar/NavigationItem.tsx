// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {useNavigate} from 'react-router';
import {Box, Typography, useTheme} from '@mui/material';

type NavigationItemProps = {
  icon: string;
  label: string;
  path?: string;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  path,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const onClick = () => {
    path && navigate(path);
  };
  return (
    <Box
      onClick={onClick}
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
          color: theme.palette.divider,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          letterSpacing: '0.4%',
          fontSize: '10px',
          fontWeight: 500,
          lineHeight: '100%',
          marginTop: '4px',
        }}>
        {label}
      </Typography>
    </Box>
  );
};
