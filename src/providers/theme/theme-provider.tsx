import type {ReactNode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {ThemeProvider as LibThemeProvider} from '@mui/material/styles';

import {globalStyles, theme} from '@/config/theme';

export const ThemeProvider = ({children}: {children?: ReactNode}) => (
  <LibThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    {children}
  </LibThemeProvider>
);
