/* eslint-disable @typescript-eslint/consistent-type-definitions */
import '@mui/material/styles';
import '@mui/material/Button';
import '@mui/material/SvgIcon';
import '@mui/material/CircularProgress';
import '@mui/material/IconButton';
import '@mui/material/Badge';
import '@mui/material/Chip';
import '@mui/material/Slider';

declare module '@mui/material/styles' {
  interface Palette {
    grey1: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    grey1?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
  }
  interface CommonColors {
    'red-gradiant': string;
    'primary-gradiant': string;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides extends ComponentColorOverrides {}
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ComponentColorOverrides {}
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends ComponentColorOverrides {}
}
declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides extends ComponentColorOverrides {}
}

interface ComponentColorOverrides {
  grey1: true;
  black: true;
}
