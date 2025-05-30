// eslint-disable-next-line no-restricted-syntax
import React from 'react';
import {Box, useTheme} from '@mui/material';

import {CentralButton} from './CentralButton';
import {NavigationItem} from './NavigationItem';

import achievementIcon from '@/assets/img/icons/landing-bottom-navbar/achievments.svg';
import eventsIcon from '@/assets/img/icons/landing-bottom-navbar/events.svg';
import homeIcon from '@/assets/img/icons/landing-bottom-navbar/home.svg';
import walletIcon from '@/assets/img/icons/landing-bottom-navbar/wallet.svg';

const navigationItems = [
  {
    icon: homeIcon,
    label: 'Home',
    path: '/',
  },
  {
    icon: achievementIcon,
    label: 'Achievement',
    path: '/achievements',
  },
  {
    icon: eventsIcon,
    label: 'Events',
    path: '/events',
  },
  {
    icon: walletIcon,
    label: 'Wallet',
    path: '/wallet',
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
        <NavigationItem key={index} {...item} />
      ))}
      <CentralButton />
      {navigationItems.slice(2).map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </Box>
  );
};
