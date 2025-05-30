// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {useNavigate} from 'react-router';
import {Box, useTheme} from '@mui/material';

import bottomNavbarIcon from '@/assets/img/bg/center-bottom-navbar-icon.png';

export const CentralButton: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/challenges');
  };
  return (
    <Box
      onClick={onClick}
      component="button"
      aria-label="Central action"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '54px',
        background: theme.palette.common['primary-gradiant'],
        boxShadow:
          '-5px 4px 5.6px 1px rgba(0, 0, 0, 0.3) inset, 0px 0px 0px 0px rgba(243, 199, 59, 0)',
        display: 'flex',
        minHeight: '60px',
        width: '60px',
        height: '60px',
        padding: '0 9px',
        border: 'none',
        cursor: 'pointer',
      }}>
      <Box
        component="img"
        src={bottomNavbarIcon}
        alt=""
        loading="lazy"
        sx={{
          aspectRatio: '1',
          objectFit: 'contain',
          objectPosition: 'center',
          width: '37px',
          alignSelf: 'stretch',
          margin: 'auto 0',
        }}
      />
    </Box>
  );
};
