// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {Box, useTheme} from '@mui/material';

import {CentralButton} from './CentralButton';
import {NavigationItem} from './NavigationItem';

const navigationItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4bd132d185a24e943179e118a0e9fcba322b3cc4d46674396b3e95d4b056a89b?apiKey=305c4308d1064f65b99840ae6fe4e523&',
    label: 'Home',
    href: '/',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/402afc7bf09cfe6d4df0399443826fbc2598fc15323bd2a657cff3314e4a2e82?apiKey=305c4308d1064f65b99840ae6fe4e523&',
    label: 'Achievement',
    href: '/',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0abae68e375a0d4e44721cf728d2dc38eb398c693a6be713c608b4cc1aa990a8?apiKey=305c4308d1064f65b99840ae6fe4e523&',
    label: 'Settings',
    href: '/',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e139d8baff6cacd5e07c4cb81f74e51f32915e1c24ba37df2f9af79c82dbf5ac?apiKey=305c4308d1064f65b99840ae6fe4e523&',
    label: 'Wallet',
    href: '/wallet',
  },
];

export const BottomNavbar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: '0px -4px 3px rgba(0, 0, 0, 0.25)',
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        width: '100%',
        maxWidth: '768px',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '6px 24px 16px',
        margin: 'auto',
      }}>
      {navigationItems.slice(0, 2).map((item, index) => (
        <NavigationItem
          key={index}
          href={item.href}
          icon={item.icon}
          label={item.label}
        />
      ))}
      <CentralButton />
      {navigationItems.slice(2).map((item, index) => (
        <NavigationItem
          key={index}
          href={item.href}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </Box>
  );
};
