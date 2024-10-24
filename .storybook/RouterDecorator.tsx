import React, {ReactNode} from 'react';
import type {Decorator} from '@storybook/react/';
import {MemoryRouter, Route, Routes, useLocation} from 'react-router';
import {Typography} from '@mui/material';

const Router = ({children}: {children: ReactNode}) => (
  <MemoryRouter
    initialEntries={['/', '/achivement', '/events', '/chat', '/wallet']}
    initialIndex={0}>
    {children}
  </MemoryRouter>
);
const CurrentRoute = () => {
  const location = useLocation();
  return <></>;
  return (
    <Typography variant="body2" sx={{pb: 2}} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
};

export const RouterProviderDecorator: Decorator = (Story, context) => (
  <Router>
    <Routes>
      <Route path="*" element={<CurrentRoute />} />
    </Routes>
    <Story {...context} />
  </Router>
);
