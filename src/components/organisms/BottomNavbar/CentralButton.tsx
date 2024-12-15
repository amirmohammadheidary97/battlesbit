// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {useNavigate} from 'react-router';
import {Box, useTheme} from '@mui/material';

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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a2612c0fb312ed3fb94ade86e0c33ee55a2021eb98fb8807771530edd0b449?apiKey=305c4308d1064f65b99840ae6fe4e523&"
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
