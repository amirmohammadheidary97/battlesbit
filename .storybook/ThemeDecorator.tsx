import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

import type {Decorator} from '@storybook/react/';
import "../src/app.css"
import {globalStyles, theme} from '../src/config/theme';

export const ThemeProviderDecorator: Decorator = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
);

// export const decorators = [withThemeProvider];
