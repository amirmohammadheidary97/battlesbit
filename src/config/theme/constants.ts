/* eslint-disable @typescript-eslint/no-unused-vars */
import type {PaletteOptions} from '@mui/material';

export const commonPalette: PaletteOptions = {
  error: {
    main: '#FF1E38',
  },
  success: {main: '#0ECB81'},
  secondary: {
    main: '#0B42F0',
    light: '#5C6FFD',
    dark: '#04299F',
  },
  common: {
    'red-gradiant': '#D32F2F',
    'primary-gradiant':
      'linear-gradient(180deg, rgba(254, 190, 16, 0.85) 44.5%, #FFDC60 100%)',
  },
};
// background: radial-gradient(92.77% 33.98% at 49.11% 1.76%, #181A20 16.5%, #202229 100%)

export const darkPalette: PaletteOptions = {
  background: {
    default: '#181A20',
    paper: '#25272f',
  },
  primary: {
    main: '#F3C73B',
    dark: '#4D2E00',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#6d6d6d',
  },
  divider: '#595959',
};
export const lightPalette: PaletteOptions = {
  background: {
    default: '#FFFFFF',
    paper: '#DDDDDD',
  },
  primary: {
    main: '#F3C73B',
    dark: '#A88107',
  },
  text: {
    primary: '#000000',
    secondary: '#5D5D5D',
  },
  divider: '#E7E7E7',
};

const goldShades = [
  '#FFE6C0',
  '#F0B90B',
  '#C19407',
  '#937104',
  '#694F02',
  '#413001',
  '#1C1300',
];
const blueShades = [
  '#EFF0FF',
  '#C1C6FE',
  '#919BFE',
  '#5C6FFD',
  '#0B42F0',
  '#04299F',
  '#011156',
];
const grayShades = [
  '#EAE8E7',
  '#C4C0BC',
  '#9D9A96',
  '#777572',
  '#545250',
  '#333231',
  '#151414',
];
